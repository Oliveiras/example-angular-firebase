import { Component } from '@angular/core';
import { Task } from './task/task';
import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { TaskDialogResult, TaskDialogComponent } from './task-dialog/task-dialog.component';
import { 
  getFirestore, 
  CollectionReference, 
  collection, 
  collectionData, 
  doc, 
  addDoc, 
  deleteDoc, 
  updateDoc,
  runTransaction
} from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { Firestore } from 'firebase/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  firestore: Firestore;
  todo: Observable<Task[]>;
  inProgress: Observable<Task[]>;
  done: Observable<Task[]>;

  constructor(private dialog: MatDialog) {
    this.firestore = getFirestore();
    this.todo = collectionData(this.getCollection('todo'));
    this.inProgress = collectionData(this.getCollection('inProgress'));
    this.done = collectionData(this.getCollection('done'));
  }

  newTask(): void {
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '270px',
      data: {
        task: {},
      },
    });
    dialogRef
      .afterClosed()
      .subscribe((result: TaskDialogResult) => {
        if (!result) {
          return;
        }
        // this.store.collection('todo').add(result.task);
        addDoc(this.getCollection('todo'), result.task);
      });
  }

  editTask(list: 'done' | 'todo' | 'inProgress', task: Task): void {
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '270px',
      data: {
        task,
        enableDelete: true,
      },
    });
    dialogRef.afterClosed().subscribe((result: TaskDialogResult) => {
      if (!result) {
        return;
      }
      if (result.delete) {
        // this.store.collection(list).doc(task.id).delete();
        deleteDoc(doc(this.getCollection(list), task.id));
      } else {
        // this.store.collection(list).doc(task.id).update(task);
        updateDoc(doc(this.getCollection(list), task.id), task);
      }
    });
  }

  drop(event: CdkDragDrop<Task[]|null>): void {
    if (event.previousContainer === event.container) {
      return;
    }
    if (!event.previousContainer.data || !event.container.data) {
      return;
    }
    const item = event.previousContainer.data[event.previousIndex];
    // this.store.firestore.runTransaction(() => {
      runTransaction(this.firestore, () => {
      const promise = Promise.all([
        // this.store.collection(event.previousContainer.id).doc(item.id).delete(),
        deleteDoc(doc(this.getCollection(event.previousContainer.id), item.id)),
        // this.store.collection(event.container.id).add(item),
        addDoc(this.getCollection(event.container.id), item),
      ]);
      return promise;
    });
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }

  getCollection(name: string): CollectionReference<Task> {
    return collection(this.firestore, name) as CollectionReference<Task>;
  }

}
import { writable } from "svelte/store";

const STUDENTS = [
  { name: "john", surname: "doe", age: 17 },
  { name: "micheal", surname: "angelo", age: 21 },
];

const { subscribe, set, update } = writable(STUDENTS);

const addStudent = (student) =>
  update((students) => {
    return [...students, student];
  });

const reset = () => {
  set(STUDENTS);
};

export default {
  subscribe,
  addStudent,
  reset,
};

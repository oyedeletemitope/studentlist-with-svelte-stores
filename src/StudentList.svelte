<script>
  import "./app.css";
  import students from "./stores/students";

  // binding values
  let name = "";
  let surname = "";
  let age = "";

  // submit student
  const submitStudent = () => {
    students.addStudent({ name, surname, age });
    // reset values
    name = surname = age = "";
  };
</script>

<div class="studentList">
  <input type="text" bind:value={name} placeholder="Enter student name" />
  <input type="text" bind:value={surname} placeholder="Enter student surname" />
  <input type="year" bind:value={age} placeholder="Enter student age" />
  <button class="button" type="submit" on:click={submitStudent}
    >Add Student</button
  >
  <button class="reset" type="submit" on:click={students.reset} name="reset"
    >Reset</button
  >
</div>
<!--
<style>
  #carList {
    margin: 0 auto;
    border: 2px;
    box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
    height: 300px;
    width: 410px;
    background-color: rgb(231, 231, 231);
  }
  input {
    margin: 30px 20px 0;
    height: 30px;
    width: 90%;
    padding: 0;
  }
  button {
    margin: 20px 15px 0;
    height: 40px;
    width: 170px;
    color: #fff;
    padding: 0;
  }
  .button {
    background-color: blue;
  }
  .reset {
    background-color: red;
  }
</style>
-->

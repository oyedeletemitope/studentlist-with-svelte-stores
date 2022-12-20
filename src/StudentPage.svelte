<script>
  import "./app.css";
  import students from "./stores/students";
</script>

<div id="studentPage" class="studentPage">
  <table id="my table" class="table-bordered">
    <thead>
      <tr>
        <th>student name</th>
        <th>surname</th>
        <th>age</th>
      </tr>
    </thead>
    <tbody>
      {#each $students as student}
        <tr>
          <td>{student.name}</td>
          <td>{student.surname}</td>
          <td>{student.age}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
<!--
<style>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  .table-bordered {
    margin: 50px auto;
    border-width: 1px 1px 1px 0px;
    border-style: solid solid solid none;
    border-color: #fff #fff #fff -moz-use-text-color;
    border-collapse: collapse;
    border-radius: 4px;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
  .table-bordered th,
  .table-bordered td {
    min-width: 150px;
    padding: 8px;
    line-height: 20px;
    text-align: left;
    vertical-align: top;
    border: 1px solid #fff;
  }

  .table-bordered th {
    background-color: rgb(88, 83, 83);
    color: #fff;
  }
</style>
-->

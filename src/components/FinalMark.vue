<template>
  <div class="container">
    <h2 class="text-center mt-5">👨‍🎓 Student Final Mark List 👩‍🎓</h2>
    <div class="d-flex mt-5">
      <div class="row">
        <div class="mt-4">
          <input
            type="text"
            v-model="name"
            placeholder="Name Student"
            class="w-100 form-control"
            required
          />
        </div>
        <div class="mt-4">
          <input
            type="text"
            v-model="subject"
            placeholder="Subject"
            class="w-100 form-control"
            required
          />
        </div>
        <div class="mt-4">
          <input
            type="number"
            v-model="mark"
            placeholder="Subject Mark"
            class="w-100 form-control"
            required
          />
        </div>
        <div class="mt-4">
          <button @click="submitMark" class="btn btn-primary rounded-0">
            Add Mark
          </button>
        </div>
      </div>
    </div>
    <table class="table table-bordered mt-5">
      <thead>
        <tr>
          <th>Name Student</th>
          <th>Subject</th>
          <th>Final Mark</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(student, index) in students" :key="index">
          <td>{{ student.name }}</td>
          <td>{{ student.subject }}</td>
          <td>{{ student.mark }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "FinalMark",
  data: () => {
    return {
      name: "",
      subject: "",
      mark: "",
      students: [],
    };
  },
  methods: {
    submitMark() {
      // console.log(this.name);
      this.students.push({
        name: this.name,
        subject: this.subject,
        mark: this.mark,
      });
    },
  },
};
</script>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.mt-5 {
  margin-top: 3rem !important;
  justify-content: center;
}

thead {
  background-color: darkgray;
}
</style>

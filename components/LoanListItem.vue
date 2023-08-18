
<script setup lang="ts">

const props = defineProps({
  id: {
    type: String,
    required: true
  },
  principal: {
    type: Number,
    required: true
  },
  borrower: {
    type: String,
    required: true
  },
  lender: {
    type: String,
    required: true
  },
  term: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  interestRate: {
    type: Number,
    required: true
  },
  action: {
    type: String,
    required: true
  },
  configuration: {
    type: String,
    required: true
  },
  product: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  }

})



</script>

<template>
<div class="overflow-x-auto">
  <table class="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
      {/* row 2 */}
      <tr class="hover">
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>3</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
      </tr>
    </tbody>
  </table>
</div>

</template>


<style scoped>

</style>
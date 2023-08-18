
<script setup lang="ts">
import TitleCard from "../components/TitleCard.vue";
import { formattedBTC, formattedCurrency, formattedInterestRate } from "../utils";


const bills = [
  {
    invoiceNo: "#4567",
    amount: 23989,
    duration: 30,
    interestRate: .0550,
    status: "Pending",
    generatedOn: "06 08 2023",
    paidOn: "-",
  },
  {
    invoiceNo: "#4523",
    amount: 34989,
    duration: 30,
    interestRate: .0450,
    status: "Pending",
    generatedOn: "01 08 2023",
    paidOn: "-",
  },
  {
    invoiceNo: "#4453",
    amount: 39989,
    duration: 30,
    interestRate: .050,
    status: "Funded",
    generatedOn: "31 07 2023",
    paidOn: "17 08 2023",
  },
  {
    invoiceNo: "#4359",
    amount: 28927,
    duration: 10,
    interestRate: .0520,
    status: "Funded",
    generatedOn: "03 08 2023",
    paidOn: "12 08 2023",
  },
  {
    invoiceNo: "#3359",
    amount: 28927,
    duration: 30,
    interestRate: .055,
    status: "Funded",
    generatedOn: "15 08 2023",
    paidOn: "-",
  },
  {
    invoiceNo: "#3367",
    amount: 28927,
    duration: 30,
    interestRate: .035,
    status: "Funded",
    generatedOn: "10 08 2023",
    paidOn: "-",
  },
  {
    invoiceNo: "#3359",
    amount: 28927,
    duration: 15,
    interestRate: .055,
    status: "Funded",
    generatedOn: "29 07 2023",
    paidOn: "12 08 2023",
  },
  {
    invoiceNo: "#2359",
    amount: 28927,
    duration: 10,
    interestRate: .0475,
    status: "Funded",
    generatedOn: "08 08 2023",
    paidOn: "17 08 2023",
  },
];

const getPaymentStatus = (status:String) => {
  if (status === "Paid")
    return "badge-success";
  if (status === "Pending")
    return "badge-warning";
  else return "badge-primary";
};

</script>

<template>
  <TitleCard title="Loan Requests">
    <div class="w-full overflow-x-auto">
      <table class="table w-full">
        <thead>
          <tr>
            <th class="text-lg">Amount</th>
            <th class="text-lg">Interest Rate</th>
            <th class="text-lg">Duration</th>
            <th class="text-lg">Interest Payment</th>
            <th class="text-lg">Total Repayment</th>
            <th class="text-lg">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="{amount,interestRate,duration,status, invoiceNo} in bills" :key="invoiceNo">
            <td>{{formattedCurrency(amount)}}</td>
            <td>{{ formattedInterestRate(interestRate) }}</td>
            <td>{{duration}} days</td>
            <td>{{formattedCurrency(amount * (interestRate/365)*duration)}}</td>
            <td>{{formattedCurrency(amount * (interestRate/365) * duration + amount)}}</td>
            <td><div class="badge" :class="getPaymentStatus(status)">{{status}}</div></td>
          </tr>
        </tbody>
      </table>

    </div>

  </TitleCard>
</template>


<style scoped></style>

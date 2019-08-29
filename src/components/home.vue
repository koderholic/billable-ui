<template>
  <div class="relative">
    <div class="bg-black-50 vh-100 w-100 ph3 pt5 pt6-l absolute z-max" v-if="notifications.length > 0">
      <notify :notifications=notifications />
    </div>
     <div class="w-100 cover black vh-100 bg-black-10" v-if="!isInvoice">
        <div class="ph7-l pt6-l center pa4 pt5" >
          <p>Enter Company Name :</p>
          <input type="text" v-model="companyName" class="w-100 bg-white-50">
          <div class="relative">
            <p>Upload CSV File :</p>
            <input type="file" @change="uploadFile" class="w-100 bg-white-50">
          </div>
        </div>
    </div>
    <div v-else>
      <div class="w-100 black vh-100 bg-black-10" >
          <div class="pa7-l center pa3" style="padding-top:5rem">
              <table-display slot="tableHead" :companyName=companyName >
                <template slot="tableHead">
                    <tr>
                      <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">Employee ID</th>
                      <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">Number of Hours</th>
                      <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">Unit Price</th>
                      <th class="fw6 bb b--black-20 tl pb3 pr3 bg-white">Cost</th>
                    </tr>
                </template>
                <template slot="tableBody" v-if="invoices.length > 0">
                    <tr  v-for="(invoice, key) in invoices" :key="key">
                      <td class="pv3 pr3 bb b--black-20">{{invoice.employeeId}}</td>
                      <td class="pv3 pr3 bb b--black-20">{{invoice.workHours}}</td>
                      <td class="pv3 pr3 bb b--black-20">{{invoice.unitPrice}}</td>
                      <td class="pv3 pr3 bb b--black-20">{{invoice.cost}}</td>
                    </tr>
                    <tr  >
                      <td class="pv3 pr3 bb b--black-20"></td>
                      <td class="pv3 pr3 bb b--black-20"></td>
                      <td class="pv3 pr3 bb b--black-20 b">Total : </td>
                      <td class="pv3 pr3 bb b--black-20 b">{{getTotalCost}}</td>
                    </tr>
                </template>
                <template slot="tableBody" v-else>
                  <tr  >
                    <p>No invoice for specified company yet!</p>
                  </tr>
                </template>
              </table-display>
          </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import { HTTP } from "@/common";
import { checkRedirect } from "@/common";
import notify from "@/components/generic/notify";
import tableDisplay from "@/components/generic/tableDisplay";


export default {
  components: {
    notify,
    tableDisplay
  },
  data() {
    return {
      lLoading: true,
      isInvoice : false,
      companyName : "",
      notifications: [],
      invoices : [],
      api : "http://localhost:8100/api/invoice"
    };
  },
  computed : {
    getTotalCost() {
      let total = 0
      this.invoices.forEach(invoice=>{
        total += invoice.cost
      })
      return total
    }
  },
  methods: {
    uploadFile(e) {
      let csvReport = e.target.files[0]
      let formData = new FormData();
      formData.append("csvReport",csvReport)
      let app = this

      if (!csvReport.name.includes(".csv")) {
        this.notifications.push({
          Code : 400,
          Message : "Invalid file type"
        })
        e.target.value = ""
        return
      }

      HTTP.post(this.api, formData).then((response) => {
        let apiResponse = response.data

        if (!apiResponse.ok || apiResponse.code != 200) {
          this.notifications.push({
            Code : apiResponse.code,
            Message : apiResponse.message
          })
        }

        this.notifications.push({
            Code : apiResponse.code,
            Message : apiResponse.message
        })
        app.invoices = apiResponse.data
        setTimeout(() => {
          app.isInvoice = true
        }, 1000);

      }).catch((e) => { 
        console.log(e) 
        this.notifications.push({
          Code : 500,
          Message : "Error processing request!"
        })
      })

    },
    triggerFile(e) {
      console.log(e.target)
      // $('input:file')[0].click()
    }
  }
};
</script>

<template>

    <div class="content-body">

        <!-- row -->
        <div class="container-fluid">

            <template v-if="$fetchState.pending">
                <PendingPlaceholder/>
            </template>

            <template v-else-if="$fetchState.error">
            <ErrorPlaceholder message="Failed to Load Resource"/>                         
            </template>

            <template v-else>


                <div class="form-head d-flex mb-3 mb-lg-5 align-items-start">
                    <div class="mr-auto d-none d-lg-block">
                        <a class="mb-0 text-secondary fs-18 font-w500" href="#">All Clients </a>
                        <a class="mb-0 font-w500 fs-18" href="#"> {{ this.subscriber_type }} </a>
                    </div>
                    <button data-toggle="modal" data-target="#basicModal" class="btn btn-danger ml-3 btn-rounded d-md-flex align-items-center d-inline-block">
                    <svg class="mr-2 scale5" width="16" height="16" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.0007 1.33334C13.0999 1.33334 10.2642 2.19353 7.85229 3.80512C5.44037 5.41672 3.56051 7.70734 2.45042 10.3873C1.34034 13.0673 1.04989 16.0163 1.61581 18.8613C2.18172 21.7064 3.57859 24.3198 5.62976 26.3709C7.68093 28.4221 10.2943 29.819 13.1393 30.3849C15.9844 30.9508 18.9334 30.6603 21.6133 29.5503C24.2933 28.4402 26.584 26.5603 28.1955 24.1484C29.8071 21.7365 30.6673 18.9008 30.6673 16C30.6627 12.1116 29.116 8.38372 26.3665 5.63418C23.617 2.88464 19.8891 1.33793 16.0007 1.33334ZM16.0007 28C13.6273 28 11.3072 27.2962 9.33381 25.9777C7.36042 24.6591 5.82235 22.7849 4.9141 20.5922C4.00585 18.3995 3.76821 15.9867 4.23123 13.6589C4.69426 11.3312 5.83715 9.19296 7.51538 7.51473C9.19361 5.8365 11.3318 4.69361 13.6596 4.23059C15.9873 3.76757 18.4001 4.00521 20.5929 4.91346C22.7856 5.82171 24.6597 7.35978 25.9783 9.33317C27.2969 11.3066 28.0007 13.6266 28.0007 16C27.9971 19.1815 26.7317 22.2317 24.482 24.4814C22.2324 26.7311 19.1822 27.9965 16.0007 28Z" fill="white"/>
                        <path d="M20.3901 11.724L14.6661 17.448L11.6088 14.3907C11.4858 14.2633 11.3387 14.1617 11.176 14.0919C11.0133 14.022 10.8384 13.9852 10.6613 13.9837C10.4843 13.9821 10.3087 14.0159 10.1449 14.0829C9.98099 14.1499 9.83212 14.2489 9.70693 14.3741C9.58174 14.4993 9.48274 14.6482 9.41569 14.8121C9.34865 14.9759 9.31492 15.1515 9.31646 15.3285C9.318 15.5056 9.35478 15.6805 9.42466 15.8432C9.49453 16.0059 9.59611 16.153 9.72346 16.276L13.7235 20.276C13.9735 20.5259 14.3126 20.6664 14.6661 20.6664C15.0197 20.6664 15.3587 20.5259 15.6088 20.276L22.2754 13.6093C22.5183 13.3579 22.6527 13.0211 22.6497 12.6715C22.6466 12.3219 22.5064 11.9875 22.2592 11.7402C22.012 11.493 21.6776 11.3528 21.328 11.3498C20.9784 11.3467 20.6416 11.4811 20.3901 11.724Z" fill="white"/>
                    </svg>
                    ADD NEW CASE</button>

                </div>

                <div class="card-header border-0 pb-2 d-lg-flex d-block">

                  <div class="modal fade" id="basicModal">
                      <div class="modal-dialog modal-lg" role="document">
                          <div class="modal-content">
                              
                              <div class="modal-header">
                                  <h5 class="modal-title">Add Case Details</h5>
                                  <button type="button btn-primary" class="close" data-dismiss="modal"><span>&times;</span>
                                  </button>
                              </div>

                              <div class="modal-body">
                                  
                                  <form @submit.prevent="addNewCase">

                                      <div class="form-row">
                                          <div class="form-group col-md-4">
                                              
                                              <center><label>First Name</label></center>
                                              <input type="text" class="form-control" placeholder="" v-model="first_name">
                                          </div>

                                          <div class="form-group col-md-4">
                                              
                                              <center><label>Last Name</label></center>
                                              <input type="text" class="form-control" placeholder="" v-model="last_name">
                                          </div>

                                          <div class="form-group col-md-4">
                                              
                                              <center><label>Email</label></center>
                                              <input type="text" class="form-control" placeholder="" v-model="email">
                                          </div>

                                          <div class="form-group col-md-4">
                                              
                                              <center><label>Date of Birth</label></center>
                                              <input type="date" class="form-control datetimepicker" placeholder="" v-model="date_of_birth">
                                          </div>

                                          <div class="form-group col-md-4">
                                              
                                              <center><label>Case Type</label></center>

                                              <select class="form-control" v-model="case_type">

                                                    <option :value="`${ type.id }`" v-for="type in all_tax_types" :key="type.id"> {{ type.s_n }} - {{ type.name }}</option>
                                                    
                                                </select>

                                          </div>

                                          <div class="form-group col-md-4">
                                              
                                              <center><label>Stage of case</label></center>
                                              <input type="text" class="form-control" placeholder="" v-model="stage_of_case">
                                          </div>

                                          <div class="form-group col-md-4">
                                              
                                              <center><label>Act</label></center>
                                              <input type="text" class="form-control" placeholder="" v-model="act">
                                          </div>

                                          <div class="form-group col-md-4">
                                              
                                              <center><label>Filling Number</label></center>
                                              <input type="text" class="form-control" placeholder="" v-model="filling_number">
                                          </div>

                                          <div class="form-group col-md-4">
                                              
                                              <center><label>Registration Date</label></center>
                                              <input type="date" class="form-control" placeholder="" v-model="registration_date">
                                          </div>

                                          <div class="form-group col-md-4">
                                              
                                              <center><label>First Hearing Date</label></center>
                                              <input type="date" class="form-control" placeholder="" v-model="first_hearing_date">
                                          </div>

                                          <div class="form-group col-md-4">
                                              
                                              <center><label>Priority</label></center>
                                              <span class="text-danger">1 for hight, 2 for medium, 3 for low </span>
                                              <input type="number" class="form-control" placeholder="" v-model="priority">
                                          </div>

                                      </div>

                                      <center>
                                          <button type="submit" class="btn btn-primary">Add Case</button>
                                      </center>
                                  </form>
                                  
                              </div>
                          </div>
                      </div>
                  </div>

                </div>

                <div class="row" v-if="this.all_cases.length">

                    <v-client-table :data="this.all_cases" :columns="case_table_columns" :options="this.case_table_options" class="table table-striped custom-table">

                        <template v-slot:profile_picture="item">

                            <img :src="`${ item.row['profile_picture'] }`"/>

                        </template>

                        <template v-slot:action="item">

                            <button class="btn btn-info btn-xs" data-toggle="modal" :data-target="`#edit_case_${ item.row['id'] }`" title="Edit"><i class="fa fa-edit"></i></button>

                            <button class="btn btn-danger btn-xs" @click="deleteCase(item.row['id'])" title="Remove"><i class="fa fa-remove"></i></button>

                            <button class="btn btn-success btn-xs" data-toggle="modal" :data-target="`#update_stage_${ item.row['id'] }`" title="Edit"><i class="fa fa-edit"></i></button>

                            <div class="modal fade" :id="`update_stage_${ item.row['id'] }`">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title">Update Stage of Case</h5>
                                            <button type="button" class="close" data-dismiss="modal"><span>&times;</span>
                                            </button>
                                        </div>
                                        <form method="POST" @submit.prevent="editStageCase(item.row['id'])">
                                            
                                            <div class="modal-body">

                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <div class="form-group">
                                                            <label>New Stage </label>
                                                            <input type="text" class="form-control" placeholder="" v-model="edit_stage_of_case">

                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div class="modal-footer">
                                                <button type="submit" class="btn btn-danger light" data-dismiss="modal">Close</button>
                                                <button type="submit" class="btn btn-primary">Update</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <div class="modal fade" :id="`edit_case_${ item.row['id'] }`">

                                <div class="modal-dialog modal-lg" role="document">
                                    <div class="modal-content">
                                        
                                        <div class="modal-header">

                                            <h5 class="modal-title">Edit Case Details</h5>

                                            <button type="button btn-primary" class="close" data-dismiss="modal"><span>&times;</span>
                                            </button>

                                        </div>

                                        <div class="modal-body">
                                            
                                            <form @submit.prevent="editCase(item.row['id'])">

                                                <div class="form-row">
                                                    <div class="form-group col-md-4">
                                                        
                                                        <center><label>First Name</label></center>
                                                        <input type="text" class="form-control" placeholder="" v-model="item.row['client']['first_name']" :id="`first_name_${ item.row['id'] }`">
                                                    </div>

                                                    <div class="form-group col-md-4">
                                                        
                                                        <center><label>Last Name</label></center>
                                                        <input type="text" class="form-control" placeholder="" v-model="item.row['client']['last_name']" :id="`last_name_${ item.row['id'] }`">

                                                    </div>

                                                    <div class="form-group col-md-4">
                                                        
                                                        <center><label>Email</label></center>
                                                        <input type="text" class="form-control" placeholder="" v-model="item.row['client']['email']" :id="`email_${ item.row['id'] }`">
                                                    </div>

                                                    <div class="form-group col-md-4">
                                                        
                                                        <center><label>Date of Birth</label></center>
                                                        <input type="date" class="form-control datetimepicker" placeholder="" v-model="item.row['client']['date_of_birth']" :id="`date_of_birth_${ item.row['id'] }`">
                                                    </div>

                                                    <div class="form-group col-md-4">
                                                        
                                                        <center><label>Case Type</label></center>

                                                        <select class="form-control" v-model="case_type" :id="`case_type_id_${ item.row['id'] }`">

                                                                <option :value="`${ type.id }`" v-for="type in all_tax_types" :key="type.id"> {{ type.s_n }} - {{ type.name }}</option>
                                                                
                                                            </select>

                                                    </div>

                                                    <div class="form-group col-md-4">
                                                        
                                                        <center><label>Stage of case</label></center>
                                                        <input type="text" class="form-control" placeholder="" v-model="item.row['stage_of_case']" :id="`stage_of_case_${ item.row['id'] }`">
                                                    </div>

                                                    <div class="form-group col-md-4">
                                                        
                                                        <center><label>Act</label></center>
                                                        <input type="text" class="form-control" placeholder="" v-model="item.row['act']" :id="`act_${ item.row['id'] }`">
                                                    </div>

                                                    <div class="form-group col-md-4">
                                                        
                                                        <center><label>Filling Number</label></center>
                                                        <input type="text" class="form-control" placeholder="" v-model="item.row['filing_number']" :id="`filing_number_${ item.row['id'] }`">
                                                    </div>

                                                    <div class="form-group col-md-4">
                                                        
                                                        <center><label>Registration Date</label></center>
                                                        <input type="date" class="form-control" placeholder="" v-model="item.row['registration_date']" :id="`registration_date_${ item.row['id'] }`">
                                                    </div>

                                                    <div class="form-group col-md-4">
                                                        
                                                        <center><label>First Hearing Date</label></center>
                                                        <input type="date" class="form-control" placeholder="" v-model="item.row['first_hearing_date']" :id="`first_hearing_date_${ item.row['id'] }`">
                                                    </div>

                                                    <div class="form-group col-md-4">
                                                        
                                                        <center><label>Priority</label></center>
                                                        <input type="number" class="form-control" placeholder="" v-model="item.row['priority']" :id="`priority_${ item.row['id'] }`">
                                                    </div>

                                                </div>

                                                <center>
                                                    <button type="submit" class="btn btn-primary">Edit Case</button>
                                                </center>
                                            </form>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </template>

                    </v-client-table>




                </div>

                <div v-else>
                    <center>
                        <img src="~/static/images/empty_box_1.jpg"/>
                    </center>
                </div>

            </template>

        </div>
        <notifications group="notification" />
    </div>
    
</template>

<script>

  import PendingPlaceholder from '~/components/pending-placeholder.vue'
  import ErrorPlaceholder from '~/components/error-placeholder.vue'

  import CasesMixins from '~/mixins.js/cases.js'

  export default {

      layout: "main_default",

      mixins: [CasesMixins],

      components: {
          PendingPlaceholder,
          ErrorPlaceholder
      },

      async fetch() {

        let res = await this.$store.dispatch('cases/getAllCases');

        this.all_cases = res;

        console.log(this.all_cases);

        //GET ALL TAX TYPES
        res = await this.$store.dispatch('cases/getAllCaseType', "all")

        this.all_tax_types = res;
        console.log(this.all_tax_types);

    },
      
  }

</script>

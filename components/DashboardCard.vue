<template>
        <div class="widget-stat card" :class ="color">
        <div class="card-body p-4">
            <div class="media ai-icon">
            <span class="mr-3 bgl-primary text-white">

                <svg v-if="title == 'Account Numbers'" id="icon-orders" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file-text">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                </svg>

                                <!-- <i class="ti-user"></i> -->
                <svg v-if="title == 'Total Subscribers' "
                id="icon-customers"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-user"
                >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                </svg>

                <i v-if="title == 'Total Menu'" class="flaticon-381-calendar-1"></i>

                <i v-if="title == 'Approved Subscribers'" class="la la-users"></i>

                <i v-if="title == 'Unapproved Subscribers'" class="la la-users"></i>
                

            </span>
            <div class="media-body text-white">
                <p class="mb-1">{{ title }}</p>
                <h4 class="mb-0 text-white">{{ titlecount }}</h4>
            </div>
            </div>
        </div>
        </div>
</template>

<script>
    export default {
        props : {
            color: {
                type: String,
                required: true,
            },
            title: {
                type: String,
                required: false
            },
            titlecount: {
                type: String,
                required: false
            }
        }
    }
</script>
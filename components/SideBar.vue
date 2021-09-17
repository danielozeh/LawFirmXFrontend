
<template>
    <div class="deznav">
        <div class="deznav-scroll">
            <ul class="metismenu" id="menu">
                <li><a class="has-arrow ai-icon" href="javascript:void()" aria-expanded="false">
                        <i class="flaticon-381-networking"></i>
                        <span class="nav-text">Clients</span>
                    </a>
                    
                    <ul aria-expanded="false">

                        <li> 
                            <nuxt-link to="/"><span>All Clients</span></nuxt-link> 
                        </li>

                    </ul>
                </li>

                <li><a class="has-arrow ai-icon" href="javascript:void()" aria-expanded="false">
                        <i class="flaticon-381-networking"></i>
                        <span class="nav-text">Case</span>
                    </a>
                    
                    <ul aria-expanded="false">

                        <li> 
                            <nuxt-link to="/case-types/all"><span>Case Types</span></nuxt-link> 
                        </li>
                        <li> 
                            <nuxt-link to="/cases"><span>All Cases</span></nuxt-link> 
                        </li>

                    </ul>
                </li>

                
            </ul>
        
        </div>
    </div>
</template>
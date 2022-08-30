<template>
    <div class="content">
        <div class="content-header pb-6">
            <h1 class="content-title">Add Course</h1>
        </div>
        <div class="main-content grid gap-y-7 gap-x-6 pb-2">
            <!-- Course Details -->
            <div class="course-details">
                <div class="form-title mt-4">
                    <h5>Course Details</h5>
                </div>
                <div class="form-group grid grid-cols-2 gap-x-6 gap-y-4">
                    <div class="form-control">
                        <label for="title" class="form-label">Title <span class="mark">*</span></label>
                        <input id="title" type="text" class="input" placeholder="Title">
                    </div>
                    <div class="form-control">
                        <label for="thumbnails" class="form-label">Thumbnails</label>
                        <input id="thumbnails" type="text" class="input" placeholder="Thumbnails">
                    </div>
                    <div class="form-control">
                        <label for="start-date" class="form-label">Start Date <span class="mark">*</span></label>
                        <input id="start-date" type="text" class="input" placeholder="Loremipsum">
                    </div>
                    <div class="form-control">
                        <label for="end-date" class="form-label">End Date <span class="mark">*</span></label>
                        <input id="end-date" type="text" class="input" placeholder="Loremipsum">
                    </div>
                    <div class="form-control">
                        <label for="caption" class="form-label">Caption</label>
                        <textarea id="caption" type="text" class="input" placeholder="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio cupiditate modi nostrum suscipit tempora totam corporis esse id deleniti laudantium?" />                        
                    </div>
                    <div class="form-control">
                        <label for="description" class="form-label">Description</label>
                        <textarea id="description" type="text" class="input" placeholder="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio cupiditate modi nostrum suscipit tempora totam corporis esse id deleniti laudantium?" />
                    </div>
                </div>
            </div>

            <div class="wrapper grid grid-cols-2 gap-x-6">
                <!-- Content Category -->
                <div class="content-category">
                    <div class="form-title">
                        <h5 >Content Category</h5>
                    </div>
                    <div class="form-group grid gap-y-4">
                        <div class="form-control select-input">
                            <label for="level" class="form-label">Level <span class="mark">*</span></label>
                            <input @click="levelOptionShow = !levelOptionShow" readonly ref="selectLevel" id="level" type="text" class="input" placeholder="Loremipsum" v-model="level">
                            <div v-show="levelOptionShow" class="option">
                                <p @click="showLevelOption('Level 1')">Level 1</p>
                                <p @click="showLevelOption('Level 2')">Level 2</p>
                                <p @click="showLevelOption('Level 3')">Level 3</p>
                            </div>  
                        </div>
                        <div class="form-control select-input">
                            <label for="categories" class="form-label">Categories</label>
                            <input @click="categoriesOptionShow = !categoriesOptionShow" readonly ref="selectCategories" id="categories" type="text" class="input" placeholder="Loremipsum" v-model="category">
                            <div v-show="categoriesOptionShow" class="option">
                                <p @click="showCategoriesOption('Category 1')">Category 1</p>
                                <p @click="showCategoriesOption('Category 2')">Category 2</p>
                                <p @click="showCategoriesOption('Category 3')">Category 3</p>
                            </div>  
                        </div>
                        <div class="form-control cap">
                            <label for="competencies" class="form-label">Competencies Based Category <span class="mark">*</span></label>
                            <div class="capsule-wrapper flex mb-2 gap-2">
                                <div v-for="i in competencies.length" :key="i" class="capsule flex gap-4 align-center">
                                    <p>{{ competencies[i-1] }}</p>
                                    <button @click="this.competencies.splice(i-1, 1)">X</button>
                                </div>                               
                            </div>
                            <input @keyup.enter="addCompetencies()" id="competencies" type="text" class="input" placeholder="Loremipsum" v-model="this.competenciesTemp">
                        </div>
                        <div class="form-control cap">
                            <label for="business-domain" class="form-label">Business Domain <span class="mark">*</span></label>
                            <div class="capsule-wrapper flex mb-2 gap-2">
                                <div v-for="i in businessDomain.length" :key="i" class="capsule flex gap-4 align-center">
                                    <p>{{ businessDomain[i-1] }}</p>
                                    <button @click="this.businessDomain.splice(i-1, 1)">X</button>
                                </div>                               
                            </div>
                            <input @keyup.enter="addBusinessDomain()" id="business-domain" type="text" class="input" placeholder="Loremipsum" v-model="this.businessDomainTemp">
                        </div>            
                    </div>
                </div>

                <!-- Content Control -->
                <div class="content-control">
                    <div class="form-title">
                        <h5 class="content-control-title">Content Control</h5>
                    </div>
                    <div class="form-group grid gap-y-4">
                        <div class="form-control radio-form">
                            <!-- Privacy Radio Form -->
                            <label class="form-label">Privacy</label>
                            <label for="public" class="radio-label">
                                <input hidden id="public" type="radio" value="public" class="radio-input" name="privacy">
                                <div class="radio-button"></div>
                                <div class="radio-text">
                                    <h5 class="privacy-type">Public</h5>
                                    <p class="privacy-desc">Everyone can watch your video</p>
                                </div>                            
                            </label>
                            <label for="protected" class="radio-label">
                                <input hidden id="protected" type="radio" value="protected" class="radio-input" name="privacy">
                                <div class="radio-button"></div>
                                <div class="radio-text">
                                    <h5 class="privacy-type">Protected</h5>
                                    <p class="privacy-desc">Everyone with link can watch your video</p>
                                </div>
                            </label>
                            <label for="private" class="radio-label">
                                <input hidden id="private" type="radio" value="private" class="radio-input" name="privacy">
                                <div class="radio-button"></div>
                                <div class="radio-text">
                                    <h5 class="privacy-type">Private</h5>
                                    <p class="privacy-desc">Only someone with access can watch your video</p>
                                </div>                            
                            </label>                        
                        </div>

                        <!-- Sequence Radio Form -->
                        <div class="form-control radio-form">
                            <label class="form-label">Sequence</label>
                            <label for="random" class="radio-label">
                                <input hidden id="random" type="radio" value="random" class="radio-input" name="sequence">
                                <div class="radio-button"></div>
                                <div class="radio-text">
                                    <h5 class="sequence-type">Random</h5>
                                    <p class="sequence-desc">User can select content without paying attention to the order of the content. (Course Flow)</p>
                                </div>                            
                            </label>
                            <label for="sequence" class="radio-label">
                                <input hidden id="sequence" type="radio" value="sequence" class="radio-input" name="sequence">
                                <div class="radio-button"></div>
                                <div class="radio-text">
                                    <h5 class="sequence-type">Sequence</h5>
                                    <p class="sequence-desc">User are required to follow the course flow.</p>
                                </div>
                            </label>               
                        </div>

                        <!-- Certified Radio Form -->
                        <div class="form-control radio-form">
                            <label class="form-label">Certified</label>
                            <label for="certificate" class="radio-label">
                                <input hidden id="certificate" type="radio" value="certificate" class="radio-input" name="certified">
                                <div class="radio-button"></div>
                                <div class="radio-text">
                                    <h5 class="certified-type">Certificate</h5>
                                    <p class="certified-desc">Everyone can watch your video</p>
                                </div>                            
                            </label>
                            <label for="noCertificate" class="radio-label">
                                <input hidden id="noCertificate" type="radio" value="noCertificate" class="radio-input" name="certified">
                                <div class="radio-button"></div>
                                <div class="radio-text">
                                    <h5 class="certified-type">No Certificate</h5>
                                    <p class="certified-desc">Everyone with link can watch your video</p>
                                </div>
                            </label>                      
                        </div>
                        
                        <div class="form-control select-input" >
                            <label for="status" class="form-label">Status <span class="mark">*</span></label>
                            <input @click="this.statusOptionShow = !this.statusOptionShow" readonly ref="selectStatus" id="status" type="text" class="input" placeholder="Loremipsum" v-model="status"> 
                            <div v-show="statusOptionShow" class="option">
                                <p @click="showStatusOption('Status 1')">Status 1</p>
                                <p @click="showStatusOption('Status 2')">Status 2</p>
                                <p @click="showStatusOption('Status 3')">Status 3</p>
                            </div>                                                                                         
                        </div>
                        <div class="form-control cap">
                            <label for="organization" class="form-label">Organization <span class="mark">*</span></label>                            
                            <div class="capsule-wrapper flex mb-2 gap-2">
                                <div v-for="i in organization.length" :key="i" class="capsule flex gap-4 align-center">
                                    <p>{{ organization[i-1] }}</p>
                                    <button @click="this.organization.splice(i-1, 1)">X</button>
                                </div>                               
                            </div>
                            <input @keyup.enter="addOrganization()" id="organization" type="text" class="input" placeholder="Loremipsum" v-model="organizationTemp">                                                        
                        </div>
                        <div class="form-control">
                            <label for="learning-hour" class="form-label">Learning Hour <span class="additional">(on minutes)</span> <span class="mark">*</span></label>
                            <input id="learning-hour" type="text" class="input" placeholder="Loremipsum">
                        </div>                                                    
                    </div>
                </div>
            </div>
        </div>
        <div class="footer buttons px-6 py-4 flex mt-4 justify-end">
            <button class="add-button">Add</button>
            <button class="discard-button">Discard</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            status : '',
            level : '',
            category : '',
            competencies : [],
            competenciesTemp: '',
            organization : [],
            organizationTemp : '',
            businessDomain : [],
            businessDomainTemp : '',
            statusOptionShow : false,
            levelOptionShow : false,
            categoriesOptionShow : false,
        }
    },
    methods : {
        showStatusOption(status) {
            this.status = status
            this.statusOptionShow = false
        },
        showLevelOption(level) {
            this.level = level
            this.levelOptionShow = false
        },
        showCategoriesOption(category) {
            this.category = category
            this.categoriesOptionShow = false
        },
        addBusinessDomain() {
            this.businessDomain.push(this.businessDomainTemp)
            this.businessDomainTemp = ""
        },
        addOrganization() {
            this.organization.push(this.organizationTemp)
            this.organizationTemp = ""
        },
        addCompetencies() {
            this.competencies.push(this.competenciesTemp)
            this.competenciesTemp = ""
        }
    }
}
</script>

<style lang="scss" scoped>
    
    @import '@/assets/scss/course.scss';
</style>
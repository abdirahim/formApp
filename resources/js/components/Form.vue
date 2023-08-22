<template xmlns="http://www.w3.org/1999/html">
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">
                        <FlashMessage></FlashMessage>
                        <h4>Form</h4>
                    </div>
                    <div class="card-body">

                        <form name="form" @submit.prevent="checkForm">

                            <p v-if="errors.length">
                                <b>Please correct the following error(s):</b>
                            <ul>
                                <li v-for="error in errors">{{ error }}</li>
                            </ul>
                            </p>
                            <div class="form-group">
                                <input type="text"
                                       class="form-control"
                                       id="name"
                                       placeholder="Your name"
                                       v-model="name"
                                >

                            </div>
                            <div class="form-group">
                                <textarea
                                    class="form-control"
                                    id="message"
                                    placeholder="Your comment"
                                    v-model="message">
                                </textarea>
                            </div>
                            <button class="btn btn-primary" type="submit">Validate</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Form',
    data() {
        return {
            errors: [],
            name: null,
            message: null,
        }
    },
    methods: {

            checkForm: function () {

                this.errors = [];

                if (!this.name) {
                    this.errors.push('Name required.');
                    return false;
                }
                if (!this.message) {
                    this.errors.push('Message required.');
                    return false;
                }

                axios.post('http://localhost:8000/api/form/posts', {
                        name: this.name,
                        message: this.message,
                    }).then(response => {
                        // console.log(response);
                        // this.response = response.data
                        this.success = 'Data saved successfully';
                        this.response = JSON.stringify(response, null, 2)
                    this.flashMessage.success({title: 'Success Message Title', message: 'The form data has been successfully submitted'});
                    this.$router.push({ name: 'formInfo', params: { name: this.name, message: this.message }})
                    }).catch(error => {
                        this.response = 'Error: ' + error.response.status
                    })

            }


    }
}
</script>

<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">
                        <FlashMessage></FlashMessage>
                        <h4>Form Info</h4>
                    </div>
                    <div class="card-body">
                        <div id='form-info'>
                            <p> {{name}} </p>
                            <p> {{ message }} </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {

    data() {
        return {
           name: this.$route.params.name,
            message: this.$route.params.message
        }
    },
}
</script>

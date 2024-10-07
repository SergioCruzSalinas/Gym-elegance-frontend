<template>
    <v-col cols="12" sm="6" md="4" lg="3" class="d-flex">
        <v-card hover color="white" max-width="400px" style="height: 320px;" class="mr-4">
            <v-card-item>
                <div>
                    <div class="card">
                        <h1>Nombre del plan</h1>
                    </div>
                    <div class="card">
                        <h2>$200</h2>
                    </div>
                        <div class="card">
                        <p>Descripcion del plan lo que incluye dentro...</p>
                    </div>
                </div>
            </v-card-item>
        </v-card>
    </v-col>
</template>

<style>
.card{
    margin-bottom:15px;
}

.card h1 {
    font-size: 25px;
    text-align: center;
    font-weight: bold;
}

.card h2{
    font-size:20px;
    text-align: center;
    font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}

.card p{
    font-size: 12px;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
}

</style>

<template>
    <div>
        <DashNav />
        <DashBoard />
    </div>
</template>

<script>
    // @ is an alias to /src
    import DashNav from "@/components/DashNav.vue";
    import DashBoard from "@/components/DashBoard.vue";

    export default {
        name: "dash",
        components: {
            DashNav,
            DashBoard
        }
    };
</script>
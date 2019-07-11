<template>
	<div>
		<DashNav/>
		<EditarFotos/>

	</div>
</template>

<script>
import DashNav from "@/components/DashNav.vue";
import EditarFotos from "@/components/EditarFotos.vue";

	export default{
		name: "Fotos",
		components:{
			DashNav,
			EditarFotos,

		}
	}
</script>
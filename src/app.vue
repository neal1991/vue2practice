<template>
	<div>
		<nav></nav>
		<el-row>
			<el-col :span="24">
				<div class="grid-content bg-purpule-dark">
					<el-button type="text" class="nav-btn" v-on:click="clickBtn">Research</el-button>
					<el-button type="text" class="nav-btn">Work</el-button>
					<el-button type="text" class="nav-btn">Students</el-button>
					<el-button type="text" class="nav-btn">Paper</el-button>
				</div>
			</el-col>
		</el-row>
		<el-button>default button</el-button>
		<div>
			<router-link to="/about">about</router-link>
		</div>
		<div>
			<router-view></router-view>
		</div>
	</div>
</template>
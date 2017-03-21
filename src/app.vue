<template>
	<div>
		<nav>
		<h1>East China Normal University</h1>
		<h2>School of Computer Science & Software Engineering</h2>
		<div class="nav-menu">
			<el-row>
				<el-col :span="24">
					<div class="grid-content bg-purpule-dark">
						<el-button type="text" class="nav-btn" size="large" v-on:click="clickBtn">Home</el-button>
						<el-button type="text" class="nav-btn">Research</el-button>
						<el-button type="text" class="nav-btn">Publications</el-button>
						<el-button type="text" class="nav-btn">Students</el-button>
						<el-button type="text" class="nav-btn">Photos</el-button>
						<el-button type="text" class="nav-btn">More</el-button>
					</div>
				</el-col>
			</el-row>
		</div>
		</nav>
		<div>
			<router-link to="/about">about</router-link>
		</div>
		<div>
			<router-view></router-view>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		data() {
			return {
				message: 'hello'
			}
		},
		methods: {
			clickBtn() {
				alert(this.message)
			}
		}
	}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
	nav {
		width: 100%;
		height: 15%;
		background: #4a4d50;
		color: #fff;
		.nav-btn {
			left: 20%;
			margin-left: 10px;
			font-size: 20px;
		}
	}
	span {
		font-size: 28px;
	}
	h1, h2 {
		position: relative;
		left: 50%;
	}
</style>

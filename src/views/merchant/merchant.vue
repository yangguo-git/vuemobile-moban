<template>
	<div class="merchantBox">
		<div class="merch-title">商户信息</div>
		<van-form @submit="onSubmit">
			<van-field readonly clickable name="picker" :value="value" label="商户类型" placeholder="请选择商户类型" right-icon="arrow"
			 border @click="showPicker = true" label-width="100" />
			<van-popup v-model="showPicker" position="bottom">
				<van-picker show-toolbar :columns="columns" @confirm="onConfirm" @cancel="showPicker = false" />
			</van-popup>
			<div class="merch-title">营业执照/登记证书</div>
			<van-field v-model="usercode" name="证件注册号" label="证件注册号" placeholder="请填写证件注册号" label-width="100" />
			<van-field v-model="password" name="商户名称" label="商户名称" placeholder="请填写商户名称" label-width="100" />
			<van-field v-model="username" name="用户名" label="经营者/法定代表人姓名" placeholder="请填写经营者/法定代表人姓名" label-width="100" />
			<van-field v-model="useradress" name="注册地址" label="注册地址" placeholder="请填写注册地址" label-width="100" />
			<van-field v-model="userLimit" name="营业期限" label="营业期限" placeholder="请填写营业期限" label-width="100" />
			<van-field name="uploader" label="营业执照照片" label-width="100">
				<template #input>
					<van-uploader v-model="uploader" :max-count="1"/>
				</template>
			</van-field>

			<div class="merch-title">组织机构代码证</div>
			<van-field v-model="userLimit" name="组织机构代码" label="组织机构代码" placeholder="请填写组织机构代码" label-width="100" />
			<van-field v-model="userLimit" name="组织机构代码有效期限" label="组织机构代码有效期限" placeholder="请填写组织机构代码有效期限" label-width="100" />
			<van-field name="uploader" label="组织结构代码证照片" label-width="100">
				<template #input>
					<van-uploader v-model="uploader" :max-count="1"/>
				</template>
			</van-field>
			<div class="merch-title">经营者/法人信息</div>
			<van-field v-model="userLimit" name="经营者/法人证件类型" label="身份证" placeholder="身份证" label-width="100" />
			<van-field v-model="userLimit" name="身份证姓名" label="身份证姓名" placeholder="请填写身份证姓名" label-width="100" />
			<van-field v-model="userLimit" name="身份证号码" label="身份证号码" placeholder="请填写身份证号码" label-width="100" />
			<van-field v-model="userLimit" name="身份证有效期限" label="身份证有效期限" placeholder="请填写身份证有效期限" label-width="100" />
			<van-field name="uploader" label="身份证照片" label-width="100">
				<template #input>
					<van-uploader v-model="uploader" :max-count="1"> 
                        <van-button icon="plus" type="primary">身份证人像面照片</van-button>
                    </van-uploader>
				</template>
			</van-field>
            <van-field name="uploader"  label-width="100" class="guoHui">
				<template #input>
					<van-uploader v-model="uploader" :max-count="1"> 
                        <span style="width:100px;display: inline-block;"></span>
                        <van-button icon="plus" type="primary">身份证国徽面照片</van-button>
                    </van-uploader>
				</template>
			</van-field>
			<div class="btn-box">
				<van-button plain block type="info" native-type="submit">
					下一步
				</van-button>
			</div>

		</van-form>
	</div>
</template>

<script>
	export default {
		name: "",
		data() {
			return {
				value: '',
				columns: ['小微商户', '个人卖家', '个体工商户', '企业', '党政、机关及事业单位', '其他组织'],
				showPicker: false,
				username: '',
				password: '',
				usercode: '',
				useradress: '',
				userLimit: '',
				uploader: []
			};
		},
		created() {},
		mounted() {},
		methods: {
			onSubmit(values) {
				console.log("submit", values);
			},
			onConfirm(value, index) {
				console.log(value, index)
				this.value = value;
				this.showPicker = false;
			}
		},
		computed: {},
		watch: {},
	};
</script>

<style scoped>
	.merch-title {
		font-size: 30px;
		margin: 15px 0px;
		color: black;
		font-weight: bolder;
	}
	.merchantBox {
		margin: 0px 10px;
	}
	.btn-box {
		margin-top: 15px;
		margin-bottom: 15px;
	}
    /* .a >>> .b { } 
    /deep/  .page-tables {
	   width:130px;
    }
    */
     .guohui .van-cell__value >>> .van-field__body{
       margin-left: 200px !important;
    }
</style>

<template>
<f7-page>
    <f7-navbar title="Thông tin cá nhân" back-link="Back"></f7-navbar>
    <p style="text-align:center">
        <img :src="user.duongdanavatar" width="70px" height="70px" style="border-radius:50%">
    </p>
    <f7-list no-hairlines-md>
      <f7-list-input
        label="Email"
        type="email"
        placeholder="Email"
        @input="user.email"
        v-model="user.email"
        disabled
      ></f7-list-input>

      <f7-list-input
        label="Username"
        type="text"
        placeholder="Username"
         @input="user.username"
        v-model="user.username"
        disabled
      ></f7-list-input>
        <f7-list-input
        label="Địa chỉ"
        type="text"
        placeholder="Địa chỉ"
         @input="user.diachi"
        v-model="user.diachi"
        
      ></f7-list-input>
      <f7-list-input
        label="Số điện thoại"
        type="text"
        placeholder="SĐT"
         @input="user.phone"
        v-model="user.phone"
      ></f7-list-input>
      
      <f7-list-input
        label="Giới tính"
        type="select"
        v-model="gioitinh"
        >
        <option value="nam">Nam</option>
        <option value="nu">Nữ</option>
      </f7-list-input>

    </f7-list>
</f7-page>
</template>

<script>
import axios from 'axios'
export default {
    data()
    {
        return {
            user: {}
        }
    },
    methods:
    {
        api_user()
        {
            axios.post(this.$store.state.url_web+ 'infomations-by-token/',{
                key: this.$cookies.get('key')
            },
            {
                headers: {
                    Authorization: "Token "+ this.$cookies.get('key')
                }
            }).then((response) => {
                // console.log(response.data)
                this.user = response.data
                // console.log(response.data.qu)
            })
        },
    },
    mounted()
    {
        this.api_user()
    }
}
</script>
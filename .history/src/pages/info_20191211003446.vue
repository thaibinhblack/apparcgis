<template>
<f7-page>
    <f7-navbar title="Thông tin cá nhân" back-link="Back"></f7-navbar>
    <p style="text-align:center">
        <img :src="user.duongdanavatar" width="40px" height="40px" style="border-radius:50%">
    </p>
    <f7-list no-hairlines-md>
      <f7-list-input
        label="Name"
        type="text"
        placeholder="Your name"
      ></f7-list-input>

      <f7-list-input
        label="E-mail"
        type="email"
        placeholder="E-mail"
      ></f7-list-input>

      <f7-list-input
        label="URL"
        type="url"
        placeholder="URL"
      ></f7-list-input>

      <f7-list-input
        label="Password"
        type="password"
        placeholder="Password"
      ></f7-list-input>

      <f7-list-input
        label="Phone"
        type="tel"
        placeholder="Phone"
      ></f7-list-input>

      <f7-list-input
        label="Gender"
        type="select"
        >
        <option>Male</option>
        <option>Female</option>
      </f7-list-input>

      <f7-list-input
        label="Birth date"
        type="date"
        placeholder="Birth day"
        defaultValue="2014-04-30"
      ></f7-list-input>

      <f7-list-item
        title="Toggle"
      >
        <f7-toggle slot="after"></f7-toggle>
      </f7-list-item>

      <f7-list-input
        label="Range"
        :input="false"
      >
        <f7-range slot="input" :value="50" :min="0" :max="100" :step="1"></f7-range>
      </f7-list-input>

      <f7-list-input
        type="textarea"
        label="Textarea"
        placeholder="Bio"
      ></f7-list-input>
      <f7-list-input
        type="textarea"
        label="Resizable"
        placeholder="Bio"
        resizable
      ></f7-list-input>
    </f7-list>
</f7-page>
</template>

<script>
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
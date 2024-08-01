<template>
  <div class="flex justify-center items-center h-screen bg-gray-100">
    <div class="w-full max-w-md bg-white rounded-lg shadow-md p-8">
      <h1 class="text-3xl font-bold text-center mb-6">Đăng nhập</h1>
      <a-form :model="formState" @finish="onFinish">
        <a-form-item name="email" :rules="[{ required: true, message: 'Vui lòng nhập email!' }]">
          <a-input v-model="formState.email" placeholder="Số điện thoại/Email" class="rounded-none"/>
        </a-form-item>
        <a-form-item name="password" :rules="[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]">
          <a-input-password v-model="formState.password" placeholder="Mật khẩu" class="rounded-none"/>
        </a-form-item>
        <a-form-item>
          <a-checkbox v-model="formState.remember">Tôi không phải là người máy</a-checkbox>
        </a-form-item>
        <div class="flex justify-between items-center mb-4">
          <router-link to="/login" class="text-red-600">Quên mật khẩu?</router-link>
        </div>
        <a-button type="primary" html-type="submit" class="w-full bg-red-600 hover:bg-red-700 text-white rounded-none"
                  :loading="loading">
          Đăng nhập
        </a-button>
      </a-form>
      <div class="mt-6 text-center">
        <span>Chưa có tài khoản?</span>
        <router-link to="/register" class="text-red-600 ml-1">Đăng ký ngay</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, reactive} from 'vue';
import {useRouter} from 'vue-router';
import {message} from 'ant-design-vue';

const router = useRouter();

const formState = reactive({
  email: '',
  password: '',
  remember: false,
});

const loading = ref(false);

const onFinish = async () => {
  loading.value = true;
  try {
    const response = await fetch('http://localhost:3322/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formState),
    });
    const data = await response.json();
    if (response.ok) {
      message.success('Đăng nhập thành công!');
      router.push('/login'); // Redirect to the dashboard or another page
    } else {
      message.error(data.message || 'Đăng nhập thất bại');
    }
  } catch (error) {
    message.error('Có lỗi xảy ra, vui lòng thử lại sau');
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
body {
  font-family: 'Arial', sans-serif;
}
</style>

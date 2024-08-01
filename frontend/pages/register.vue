<template>
  <div class="flex justify-center items-center h-screen bg-gray-100">
    <div class="w-full max-w-md bg-white rounded-lg shadow-md p-8">
      <h1 class="text-3xl font-bold text-center mb-6">Đăng ký</h1>
      <a-form :model="formState" @finish="onFinish">
        <a-form-item name="username" :rules="[{ required: true, message: 'Vui lòng nhập họ và tên!' }]">
          <a-input v-model:value="formState.username" placeholder="Tên đăng nhập" class="rounded-none"/>
        </a-form-item>
        <a-form-item name="phone" :rules="[{ required: true, message: 'Vui lòng nhập số điện thoại!' }]">
          <a-input v-model:value="formState.phone" placeholder="Số điện thoại" class="rounded-none"/>
        </a-form-item>
        <a-form-item name="email" :rules="[{ required: true, message: 'Vui lòng nhập email!' }]">
          <a-input v-model:value="formState.email" placeholder="Email" class="rounded-none"/>
        </a-form-item>
        <a-form-item name:value="password" :rules="[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]">
          <a-input-password v-model:value="formState.password" placeholder="Mật khẩu" class="rounded-none"/>
        </a-form-item>
        <a-form-item name="confirmPassword" :rules="[{ required: true, message: 'Vui lòng nhập lại mật khẩu!' }]">
          <a-input-password v-model:value="formState.confirmPassword" placeholder="Nhập lại mật khẩu" class="rounded-none"/>
        </a-form-item>
        <a-form-item>
          <a-checkbox v-model:checked="formState.agreeToTerms">
            Tôi đồng ý với <a href="#" class="text-red-600">Điều khoản và Chính sách bảo mật</a> bảo mật và xử lý dữ liệu cá
          </a-checkbox>
        </a-form-item>
        <a-form-item>
          <a-checkbox v-model:checked="formState.isOver16">
            Xác nhận khách hàng trên 16 tuổi để có thể sử dụng dịch vụ
          </a-checkbox>
        </a-form-item>
        <a-button type="primary" html-type="submit" class="w-full bg-gray-600 hover:bg-gray-700 text-white rounded-none" :loading="loading">
          Đăng ký
        </a-button>
      </a-form>
      <div class="mt-6 text-center">
        <span>Đã có tài khoản?</span>
        <router-link to="/login" class="text-red-600 ml-1">Đăng nhập ngay</router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, reactive} from 'vue';
import {useRouter} from 'vue-router';
import {message} from 'ant-design-vue';

const router = useRouter();

const formState = reactive({
  username: '',
  phone: '',
  email: '',
  password: '',
  confirmPassword: '',
  agreeToTerms: false,
  isOver16: false,
});

const loading = ref(false);

const onFinish = async () => {
  if (formState.password !== formState.confirmPassword) {
    message.error('Nhập lại mật khẩu thôi còn sai !');
    return;
  }

  loading.value = true;
  try {
    const response = await fetch('http://localhost:3322/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formState),
    });
    const data = await response.json();
    if (response.ok) {
      message.success('Đăng ký thành công!');
      await router.push('/login'); // Redirect to the login page
    } else {
      message.error(data.message || 'Đăng ký thất bại');
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

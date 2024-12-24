<template>
  <div class="custom-input-container">
    
    <v-icon v-if="icon" class="input-icon">{{ icon }}</v-icon>

    <input
      :type="type"
      :value="modelValue"
      @input="$emit('update:modelValue',( $event.target as HTMLInputElement)?.value ?? '')"
      @blur="$emit('blur')"
      class="custom-input"
      :class="{ 'input-error': error }"
    />

    <span v-if="error" class="error-message">
      {{ error }}
    </span>
  </div>
</template>

<script lang="ts" setup>

  interface Props {
    modelValue?: String | number;
    error?: String;
    type?: 'text' | 'number';
    icon?: String; 
  }

  withDefaults(defineProps<Props>(), {
    type: 'text',
  });

  defineEmits(['update:modelValue', 'blur'])
</script>


<style scoped>
.custom-input-container {
  display: flex;
  align-items: center;
  position: relative;
}

.input-icon {
  margin-right: 8px;
  font-size: 20px;
  color: #555; 
}

.custom-input {
  flex: 1;
  padding: 8px 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  transition: border-color 0.2s ease-in-out;
}

.custom-input:focus {
  border-color: white; 
}

.input-error {
  border-color: #e53935; 
}

.error-message {
  color: #e53935;
  font-size: 14px;
  margin-top: 4px;
  position: absolute;
  bottom: -20px; 
}
</style>


  
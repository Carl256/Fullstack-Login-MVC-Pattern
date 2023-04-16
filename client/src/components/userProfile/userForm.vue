<template>
    <form action="">
        <div class="form__field">
            <label for="fName" class="form__label">First Name</label>
            <input type="fName" id="fName" name="fName" class="form__input" v-model.trim="fName" required>
        </div>
        <div class="form__field">
            <label for="lName" class="form__label">Last Name</label>
            <input type="text" id="lName" name="lName" class="form__input" v-model.trim="lName" required>
        </div>
        <div class="form__field">
            <label for="birthDay" class="form__label">BirthDay</label>
            <input type="text" id="birthDay" name="birthDay" class="form__input" v-model.trim="birthDay" required>
        </div>
        <div class="form__field">
            <label for="gender" class="form__label">Gender</label>
            <input type="text" id="gender" name="gender" class="form__input" v-model.trim="gender" required>
        </div>
        <div class="form__field">
            <label for="phone" class="form__label">Phone</label>
            <input type="phone" id="phone" name="phone" class="form__input" v-model.trim="phone" required>
        </div>
        <button class="form__button" type="submit">Sign Up</button>
    </form>
</template>
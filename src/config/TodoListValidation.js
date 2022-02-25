const TodoListValidation = (values) =>{
    const errors = {};
    if(!values.email || values.email ===""){
        errors.email="email harus diisi";
    }
    
    if(!values.phone || values.phone ===""){
        errors.phone="phone harus diisi";
    }
    
    if(!values.password || values.password ===""){
        errors.password="password harus diisi";
    }
    
    if(!values.username || values.username ===""){
        errors.username="username harus diisi";
    }

    return errors;
};

export default TodoListValidation;
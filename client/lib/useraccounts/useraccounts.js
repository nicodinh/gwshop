AccountsTemplates.configure({
	negativeValidation: true,
	negativeFeedback: false,
	positiveValidation: false,
	positiveFeedback: false,
	confirmPassword: false,
	hideSignInLink: true,
	hideSignUpLink: true,
	showPlaceholders: true,
	showValidating: true,
	redirectTimeout: 2000,
	
	texts: {
		button: {
			signUp: "Create an account",
			signIn: "Sign in",
		},
		title: {
			signIn: "Sign in to sell",
			signUp: "Create your personal account",
			forgotPwd: "",
		}
	}
});

AccountsTemplates.removeField('password');
AccountsTemplates.removeField('email');
AccountsTemplates.addFields([
	{
		_id: "username",
		type: "text",
		displayName: " ",
		required: true,
		trim: false,
		minLength: 3,
		maxLength: 19,
		re: /^[a-zA-Z ]+$/,
		errStr: 'Invalid email',
	},
	{
		_id: 'email',
		type: 'email',
		required: true,
		displayName: " ",
		trim: true,
		//re: /.+@(.+){2,}\.(.+){2,}/,
		errStr: 'Invalid email',
	},
	{
		_id: 'username_and_email',
		type: 'text',
		required: true,
		displayName: " ",
		placeholder: "Username or Email",
		errStr: 'Invalid email',
	},
	{
		_id: 'password',
		type: 'password',
		required: true,
		minLength: 6,
		displayName: " ",
		//re: /(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/,
		//errStr: 'At least 1 digit, 1 lower-case and 1 upper-case',
	},
]);
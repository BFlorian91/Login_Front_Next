import { useForm, SubmitHandler } from 'react-hook-form'
import BtnLoginWith from '../../components/BtnLoginWith/BtnLoginWith'
import appleLogo from '../../public/assets/img/applelogo.png'
import Footer from '../../components/footer/Footer'
import React, { useState } from 'react'

interface IFormInputs {
	email: string
	password: string
}

let renderCounter = 0 // Debugging

export default function Login() {
	renderCounter++ // Debugging
	const [showError, setShowError] = useState(false)
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<IFormInputs>({
		defaultValues: {
			email: '',
			password: ''
		}
	})

	const onSubmit: SubmitHandler<IFormInputs> = (data) => {
		console.log(data)
	}

	React.useEffect(() => {
		const subscription = watch((value, { name, type }) =>
			console.log(value, name, type)
		)
		return subscription.unsubscribe()
	}, [watch])

	return (
		<div className="flex justify-center mt-12">
			<div className="flex flex-col items-center">
				<form className="w-64 md:w-96" onSubmit={handleSubmit(onSubmit)}>
					<h1 className="text-3xl font-bold text-center">Login</h1>
					<div className="mt-12 grid space-y-4 bg-red">
						<BtnLoginWith
							logo="https://tailus.io/sources/blocks/social/preview/images/google.svg"
							nameOfBtn="Google"
						/>
						<BtnLoginWith logo={appleLogo} nameOfBtn="Apple" />
						<BtnLoginWith
							logo="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg"
							nameOfBtn="Facebook"
						/>
					</div>
					<div className="mb-6 mt-6">
						<label
							className="block text-grey-darker text-sm font-bold mb-2"
							htmlFor="email"
						>
							Email
						</label>
						<input
							className="mt-1 block w-full px-3 py-3 bg-black border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
              invalid:border-red-500 invalid:text-red-400
              focus:invalid:border-red-500 focus:invalid:ring-red-500"
							type="email"
							{...register('email', {
								required: { value: true, message: 'This field is requiered' },
								pattern: {
									value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
									message: 'Please enter a valid email',
								},
								maxLength: 30,
							})}
							placeholder="email"
						/>
						<div className="h-0">
							{errors.email && (
								<p
									data-testid="email-error"
									className="text-red-400 text-xs italic p-1"
								>
									{errors.email.message}
								</p>
							)}
						</div>
					</div>
					<div className="mb-6 mt-6">
						<label
							className="block text-grey-darker text-sm font-bold mb-2"
							htmlFor="password"
						>
							Password
						</label>
						<input
							className="mt-1 block w-full px-3 py-3 bg-black border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
              invalid:border-red-500 invalid:text-red-400
              focus:invalid:border-red-500 focus:invalid:ring-red-500"
							{...register('password', {
								required: { value: true, message: 'This field is requiered' },
								minLength: {
									value: 8,
									message: 'Your password must have 8 characters or more',
								},
							})}
							type="password"
							placeholder="******************"
						/>
						<div className="h-4">
							{errors.password && (
								<p
									data-testid="password-error"
									className="text-red-400 text-xs italic px-2"
								>
									{errors.password.message}
								</p>
							)}
						</div>
					</div>
					<div className="flex flex-col space-y-8 items-center sm:flex-row sm:items-center sm:justify-around sm:space-y-0 justify-center">
						<button
							data-testid="submit"
							className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-8 cursor-pointer rounded border-white-50 border-2"
							type="submit"
						>
							Sign In
						</button>
						<a
							className="cursor-pointer inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker"
							href="/register"
						>
							Don't have an account yet?
						</a>
					</div>
					<div className="flex items-center justify-center mt-5">
						<a
							className="cursor-pointer inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker"
							// href="#"
						>
							Forgot Password?
						</a>
					</div>
				</form>
				<Footer />
			</div>
		</div>
	)
}

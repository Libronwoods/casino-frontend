import { useState } from "react";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";

export default function ModalContent({ isOpen, onClose }) {

	const [activeTab, setActiveTab] = useState('register');
	const [isOver21, setIsOver21] = useState(false);


	return (
		<div className="modal-overlay">
			<div className="modal-card" role="dialog" aria-modal="true">
				<button
					type="button"
					className="modal-close"
					aria-label="Закрыть"
					onClick={onClose}
				>
					×
				</button>

				< div className="modal-tabs">
					<button type="button"
						className={`modal-tab ${activeTab === 'login' ? 'active' : ''}`}
						onClick={() => setActiveTab('login')}
					>
						Вход
					</button>
					<button type="button"
						className={`modal-tab ${activeTab === 'register' ? 'active' : ''}`}
						onClick={() => setActiveTab('register')}>
						Регистрация
					</button>

				</div>

				{activeTab === 'login' && (
					<LoginForm />
				)}
				{activeTab === 'register' && (
					<RegisterForm
						isOver21={isOver21}
						setIsOver21={setIsOver21} />
				)}
			</div>
		</div>
	);
}

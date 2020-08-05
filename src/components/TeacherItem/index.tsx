import React from "react";

//Icons
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

//Styles
import "./styles.css";

function TeacherItem() {
	return (
		<article className="teacher-item">
			<header>
				<img
					src="https://avatars2.githubusercontent.com/u/30845524?s=460&v=4"
					alt="Bruno Não"
				/>
				<div>
					<strong>Bruno Caputo</strong>
					<span>Cálculo</span>
				</div>
			</header>
			<p>
				Cálculo I, II e III
				<br />
				<br />
				Tudo sobre cálculos na Engenharia.
			</p>
			<footer>
				<p>
					Preço/hora
					<strong>R$ 50,00</strong>
				</p>
				<button type="button">
					<img src={whatsappIcon} alt="Whatsapp" />
					Entrar em contato
				</button>
			</footer>
		</article>
	);
}

export default TeacherItem;

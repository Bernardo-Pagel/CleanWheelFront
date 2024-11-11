import Title from '../Title';

const Login = () => {
  return (
    <main className="w-full min-h-screen bg-c11">
      <Title />
      <div className="flex justify-center">
        <div className="w-96 h-96 pl-[48px] pr-[60px] pt-[20px] pb-[60px] bg-w">
          <p className="uppercase">Dados pessoais</p>
          <section>
            <form className='flex flex-col' action="" method="get">
              <label htmlFor="email">Email</label>
              <input
                className="bg-c1 font-roboto text-c7 text-2-s rounded-[5px] outline outline-c2 outline-offset-0 pl-3"
                type="text"
                name="email"
                id="email"
                value=""
                placeholder="contato@email.com"
                autoFocus
              />
              <label htmlFor="password">Senha</label>
              <input
                className="bg-c1 font-roboto text-c7 text-2-s rounded-[5px] outline outline-c2 outline-offset-0 pl-3"
                type="text"
                name="password"
                id="password"
                value=""
                placeholder="Insira sua senha"
                autoFocus
              />
            </form>
          </section>
          <button className="w-[126px] h-[56px] rounded-[5px] bg-gradient-to-b from-[#FFBF00] to-[#F2A50C] text-p5 text-1-m uppercase font-poppins">
            Entrar
          </button>
        </div>
      </div>
    </main>
  );
};

export default Login;

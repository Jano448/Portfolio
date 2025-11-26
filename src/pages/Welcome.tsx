export default function WelcomePage() {
  return (
    <>
      <div className="grid grid-cols-2 gap-3 justify-center items-center p-6 h-full">
        <div className="gap-4 p-2 flex flex-col">
          <h1 className="font-bold text-3xl text-gray-600">
            Ingeniero Electronico y Software
          </h1>
          <p className="font-semibold text-lg">
            Apasionado y autodidacta en temas de tecnologias. <br />
            +5 Años de experiencia en el diseño y pruebas de circuitos
            electronicos
            <br />
            +4 Años de experiencia en la implementacion de software
          </p>
        </div>
        <img
          src="Profi.png"
          alt="Profile.jpeg"
          className="max-w-30 rounded-md aspect-3/4 hover:scale-105 transform transition duration-300 ease-out"
        />
      </div>
    </>
  );
}

export default function WelcomePage() {
  return (
    <>
      <div className="grid grid-cols-2 gap-3 justify-center items-center w-screen p-6">
        <div className="gap-4 p-2 flex flex-col items-center">
          <h1 className="font-bold text-3xl">
            Ingeniero Electronico y Software
          </h1>
          <p className="font-semibold text-xl">
            Apasionado y autodidacta en temas de tecnologias.{" "}
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

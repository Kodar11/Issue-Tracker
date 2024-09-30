import Header from "./Header";

function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center h-screen bg-no-repeat bg-cover bg-[url(r'C:\Users\Tanmay Chavan\Downloads\Tracker\Tracker\frontend\src\assets\hospital.png')]">
        <div className="home-div">
          <h1 className="text-black text-center text-3xl lg:text-5xl max-sm:text-xl">WELCOME TO OUR WEBSITE</h1>
        </div>
      </div>
    </>
  );
}

export default Home;

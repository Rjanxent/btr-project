import background from './assets/background.png';
import seal from './assets/seal.png';
import breakingNews from './assets/breakingNews.png';

function Login(){

   const login = () => {
    const username = document.getElementById('username')?.value;
    const password = document.getElementById('password')?.value;
    alert(`Username: ${username}\nPassword: ${password}`);
  };

  
    return(

         <div className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}>
        
      <div className="flex w-full max-w-4xl bg-white bg-opacity-80 rounded-lg shadow-lg overflow-hidden">
        {/* Left Side */}
        <div className="w-1/2 p-6 flex items-center justify-center bg-yellow-100">
          <img src={breakingNews} alt="Breaking News" className="w-full rounded-md" />
        </div>

        {/* Right Side */}
        <div className="w-1/2 p-8 flex flex-col items-center justify-center space-y-4">
          <img src={seal} alt="Seal Logo" className="w-24 h-24" />
          <h2 className="text-2xl font-bold text-gray-800">LOGIN</h2>
          <input
            id="username"
            type="text"
            placeholder="Username"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring"
          />
          <input
            id="password"
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring"
          />
          <div className="w-full text-right">
            <a href="#" className="text-sm text-blue-600 hover:underline">Forgot Password?</a>
          </div>
          <button
            onClick={login}
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 rounded"
          >
            LOGIN
          </button>
          <a href="#" className="text-blue-600 hover:underline">Register</a>
          
        </div>
      </div>
    </div>
    );


}

export default Login
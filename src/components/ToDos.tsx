import ShowTask from "./ShowTask";
import ToDosForm from "./ToDosForm";


function To_Dos() {
  return (
    <div className="min-h-screen bg-cyan-900 text-white p-20">
      <ToDosForm />
      <ShowTask />
    </div>
  );
}

export default To_Dos;
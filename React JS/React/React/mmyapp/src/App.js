import './App.css';
import styles from './New.module.css'
function App() {
  return (
    <div className="App">
      <h1>Registration Form</h1>
      <form method="get">
        <label>Name</label>
        <input type="text" name="name" className={styles}/>
        <br/> 

        <label>Age</label>
        <input type="number" name="age"/>
        <br/>

        <label style={{
          color:'red',fontSize:'15px'
        }}>Gender</label>
        <select name="gender">
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <br/>

        <input type="submit" value="Register"/>
      </form>
    </div>
  );
}

export default App;

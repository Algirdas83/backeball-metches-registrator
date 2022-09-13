
const Login = () => {

    return (

        <div className="container">
            <form>
                <div class="mb-3">
                    <label  class="form-label">El paštas</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label  class="form-label">Slaptažodis</label>
                    <input type="password" class="form-control" name = 'password'/>
                </div>
                <button type="submit" class="btn btn-primary">Prisijungti</button>
            </form>

        </div>

    )
}

export default Login
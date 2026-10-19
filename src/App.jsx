export default function App() {
  const number1 = 30
  const jam = 9
  const nama = "Raissa" 

  const style1 = {
    color: 'darkblue',
    fontSize: '25px'
    
  }

  return (
    <>
    <div>
      <h1 className="judul" style={style1}>Kantin {nama}</h1>
    </div>

    <div>
      <p>{jam < 12 ? "Selamat pagi" : "Selamat siang"}</p>
      <p>Saldo awal kartu kantin: Rp {number1*1000}</p>
    </div>

    <div>
      <button disabled>Bayar</button>
    </div>
    </>
  )
}

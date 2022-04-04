const InputForm = () => {

  const inputPlaylist = ''


  const onSubmit = (data) => {
    alert(JSON.stringify(data))
  }


  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>
          Input playlist: <input type="text" name="input playlist" />
        </label>
        <input type="submit" value="Generate" />
      </form>
    </div>
  )
}

export default InputForm

export const Lore = (props) => {
  return (
    <div id='lore'>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-md-6'>
            <div className='lore-text'>
              <h2>Lore</h2>
              <p>{props.data ? props.data.paragraph : 'loading...'}</p>
            </div>
          </div>
          <div className='col-xs-12 col-md-6'>
            <div className='lore-text2'>
              <p>{props.data ? props.data.paragraph2 : 'loading...'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

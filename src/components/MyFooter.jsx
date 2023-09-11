const MyFooter = () => {
  return (
    <footer className="flex-column">
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-6 col-lg-4 col-xl-3">
            <p className="fw-bold">Azienda</p>
            <p>Chi siamo</p>
            <p>Opportunita di lavoro</p>
            <p>For the Record</p>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3">
            <p className="fw-bold">Community</p>
            <p>Per artisti</p>
            <p>Svilluppatori</p>
            <p>Pubblicità</p>
            <p>investitori</p>
            <p>venditori</p>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3">
            <p className="fw-bold">link Utili</p>
            <p>Assistenza</p>
            <p>App per cellulare gratuita</p>
            <p>diritti del consumatore</p>
          </div>
        </div>
      </div>
      <hr className="text-light" />
      <div className="d-flex flex-wrap row">
        <ul className="d-flex footerLista me-auto flex-wrap space-between gap-2 list-unstyled">
          <li>informazioni legali</li>
          <li>Centro sulla privacy</li>
          <li>Informativa sulla privacy</li>
          <li>Impostazioni cookie</li>
          <li>info annunci</li>
          <li>Accessibilità</li>
        </ul>
        <div>
          <p className="text-light">© 2023 Spotify AB</p>
        </div>
      </div>
    </footer>
  );
};

export default MyFooter;

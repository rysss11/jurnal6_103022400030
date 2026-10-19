function Panel({judul, children}) {
    return (
        <div className="panel">{judul && <h2>{judul}</h2>}</div>

    );
}

export default Panel;
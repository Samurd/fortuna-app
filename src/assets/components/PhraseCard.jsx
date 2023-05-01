function PhraseCard({data}) {

  return (
    <div className="container-card">
      <h2 className="phrase">{data.phrase}</h2>
    </div>
  );
}

export default PhraseCard;

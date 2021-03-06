import Hamming from './hamming';

describe('Hamming', () => {
  const hamming = new Hamming();

  test('no difference between empty strands', () => {
    expect(hamming.compute('', '')).toEqual(0);
  });

  xtest('no difference between identical strands', () => {
    expect(hamming.compute('A', 'A')).toEqual(0);
  });

  xtest('long identical strands', () => {
    expect(hamming.compute('GGACTGA', 'GGACTGA')).toEqual(0);
  });

  xtest('complete distance in single nucleotide strands', () => {
    expect(hamming.compute('A', 'G')).toEqual(1);
  });

  xtest('complete distance in small strands', () => {
    expect(hamming.compute('AG', 'CT')).toEqual(2);
  });

  xtest('small distance in small strands', () => {
    expect(hamming.compute('AT', 'CT')).toEqual(1);
  });

  xtest('small distance', () => {
    expect(hamming.compute('GGACG', 'GGTCG')).toEqual(1);
  });

  xtest('small distance in long strands', () => {
    expect(hamming.compute('ACCAGGG', 'ACTATGG')).toEqual(2);
  });

  xtest('non-unique character in first strand', () => {
    expect(hamming.compute('AAG', 'AAA')).toEqual(1);
  });

  xtest('non-unique character in second strand', () => {
    expect(hamming.compute('AAA', 'AAG')).toEqual(1);
  });

  xtest('same nucleotides in different positions', () => {
    expect(hamming.compute('TAG', 'GAT')).toEqual(2);
  });

  xtest('large distance', () => {
    expect(hamming.compute('GATACA', 'GCATAA')).toEqual(4);
  });

  xtest('large distance in off-by-one strand', () => {
    expect(hamming.compute('GGACGGATTCTG', 'AGGACGGATTCT')).toEqual(9);
  });

  xtest('disallow first strand longer', () => {
    expect(() => hamming.compute('AATG', 'AAA')).toThrow(
      new Error('left and right strands must be of equal length'),
    );
  });

  xtest('disallow second strand longer', () => {
    expect(() => hamming.compute('ATA', 'AGTG')).toThrow(
      new Error('left and right strands must be of equal length'),
    );
  });
});

import { search } from '../src';

describe('index', () => {
  describe('search', () => {
    it('should find spain', () => {
      const result = search('spain', {
        countryCCA3s: ['ESP', 'CHN', 'FRA'],
      });

      expect(result?.[0]).toEqual({ name: 'Spain', cca3: 'ESP' });
    });

    it('should find turkey', () => {
      const result = search('turkey', {
        countryCCA3s: ['ESP', 'CHN', 'FRA', 'TUR'],
      });

      expect(result?.[0]).toEqual({ name: 'Turkey', cca3: 'TUR' });
    });
    it('should search with custom keys', () => {
      const result = search('uni', {
        keys: ['name.common', 'name.official'],
      });
      expect(result?.[0].name).toContain('United');
    });
    it('should find usa', () => {
      const result = search('united st', {
        keys: ['name.common', 'name.official'],
      });
      expect(result?.[0]).toEqual({ name: 'United States', cca3: 'USA' });
    });

    it('should find cyprus', () => {
      const result = search('cyprus', {
        keys: [
          'name.common',
          'name.official',
          'altSpellings',
          'capital',
          'cities',
        ],
      });
      expect(result?.[0]).toEqual({ name: 'Cyprus', cca3: 'CYP' });
    });
    it('should find cyprus', () => {
      const result = search('kıbrıs', {
        keys: [
          'translations.common',
          'translations.official',
          // 'name.common',
          // 'name.official',
          // 'altSpellings',
          // 'capital',
          // 'cities',
        ],
      });
      expect(result?.[0]).toEqual({ name: 'Cyprus', cca3: 'CYP' });
    });
  });

  describe('case insensetive search', () => {
    describe('case insensetive search', () => {
      it('should find italy', () => {
        const result = search('Ita', {
          countryCCA3s: ['ESP', 'CHN', 'ITA', 'USA'],
          minMatchCharLength: 2,
        });

        expect(result?.[0]).toEqual({ name: 'Italy', cca3: 'ITA' });
      });
    });
  });
});

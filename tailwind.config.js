/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        tempting: ['Tempting'],
        Nomark: ['Numea-DEMO-BF66a1cde6c2452'],
        AncientMedium: ['Ancient Medium'],
        
        PortraitBold: ['Portrait-Bold'],
        
        pressuramono: ['pressura_mono'],
        
        pressuramonobold: ['pressura_mono_bold'],
        
        DarlothesGrunge: ['Darlothes Grunge'],

        Leander:['Leander'],
        new:['Heavitas'],
        Love:['Love'],
        UnnaRegular:['Unna-Regular']
        
      },
    },
  },
  plugins: [],
}
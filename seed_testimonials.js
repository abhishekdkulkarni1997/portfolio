import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA0AW_OBMjbG4isGLizqT0vhFb8Yu5Q3zo",
  authDomain: "portfolio-26709.firebaseapp.com",
  projectId: "portfolio-26709",
  storageBucket: "portfolio-26709.firebasestorage.app",
  messagingSenderId: "535742441601",
  appId: "1:535742441601:web:498d95ccd06ab9aa180580"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const testimonials = [
  {
    name: "Ramesh Goel",
    role: "Post-Operative Rehab",
    content: "After my hip surgery, I was worried about walking normally again. The step-by-step guidance and dedicated physio sessions helped me regain full function within months. Highly recommended!",
    rating: 5,
    approved: true
  },
  {
    name: "Pooja Nair",
    role: "Professional Dancer",
    content: "Ankle sprains are common in my profession, but this time it was severe. The targeted rehabilitation and balance training got me back on stage faster than I thought possible.",
    rating: 5,
    approved: true
  },
  {
    name: "Suresh Reddy",
    role: "Software Engineer",
    content: "Working long hours at a desk ruined my posture and caused severe neck pain. The ergonomic advice coupled with strengthening exercises completely resolved my issues.",
    rating: 5,
    approved: true
  },
  {
    name: "Deepa Menon",
    role: "State-Level Tennis Player",
    content: "I developed a painful tennis elbow right before a major tournament. Thanks to the expert therapy and taping techniques, I was able to play pain-free.",
    rating: 5,
    approved: true
  },
  {
    name: "Akash Bhat",
    role: "Chronic Back Pain Patient",
    content: "I had lived with lower back pain for over five years. The comprehensive physical therapy program here did what multiple medications could not. I finally sleep peacefully.",
    rating: 5,
    approved: true
  },
  {
    name: "Kavita Rao",
    role: "Postpartum Care",
    content: "Recovering core strength after childbirth was tough. The specialized pelvic floor therapy and supervised workouts were incredibly beneficial and empowering.",
    rating: 5,
    approved: true
  },
  {
    name: "Manish Agarwal",
    role: "Rotator Cuff Tear",
    content: "The non-surgical approach to my rotator cuff tear through rigorous physiotherapy saved me from going under the knife. My shoulder feels stronger every day.",
    rating: 5,
    approved: true
  },
  {
    name: "Riya Sen",
    role: "Badminton Player",
    content: "A nasty Achilles tendonitis kept me off the court. The deep tissue massages and eccentric strengthening protocol brought my explosive movement back.",
    rating: 5,
    approved: true
  },
  {
    name: "Arvind Kulkarni",
    role: "Sciatica Relief",
    content: "The sharp shooting pain from sciatica made sitting impossible. The lumbar traction and specific stretching routines provided immense relief within just a few weeks.",
    rating: 4,
    approved: true
  },
  {
    name: "Suman Das",
    role: "Elderly Care",
    content: "The balance and coordination exercises designed for me have drastically reduced my fear of falling. The therapists are so kind and patient.",
    rating: 5,
    approved: true
  }
];

async function seed() {
  console.log("Starting to seed testimonials...");
  // Let's create an artificial delay between inserts so the timestamps are ordered chronologically
  for (const [index, t] of testimonials.entries()) {
    try {
      t.createdAt = serverTimestamp();
      await addDoc(collection(db, 'testimonials'), t);
      console.log(`[${index + 1}/10] Added testimonial for ${t.name}`);
      // wait a tiny bit to ensure different timestamps if needed
      await new Promise(resolve => setTimeout(resolve, 500));
    } catch (e) {
      console.error(`Error adding ${t.name}: `, e);
    }
  }
  console.log("Finished seeding!");
  process.exit(0);
}

seed();

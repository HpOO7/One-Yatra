/* ═══════════════════════════════════════════════════════════════════════
   MEDIA — the single place to add photographs and film.
   Put a URL against `src` and that slot stops being a placeholder.
   Leave src empty and a drawn placeholder shows instead, with a spec/note
   for whoever is shooting or sourcing that photo.
═══════════════════════════════════════════════════════════════════════ */
var TONE=true;
var MEDIA={
  heroBg1:{src:'media/hero-1.jpg',kind:'photo',alt:'Lakshman Jhula bridge over the Dhauli Ganga at dusk'},
  heroBg2:{src:'media/hero-2.jpg',kind:'photo',alt:'Dhauli Ganga aarti fire ceremony at night'},
  heroBg3:{src:'media/hero-3.jpg',kind:'photo',alt:'The Dhauli Ganga and the Himalayan foothills by day'},
  founderArjun:{src:'media/founder-arjun.jpg',kind:'photo'},
  founderFranck:{src:'media/founder-franck.jpg',kind:'photo'},
  ttcKriya:{src:'media/ttc-kriya.jpg',kind:'photo'},
  ttcBreathwork:{src:'media/ttc-breathwork.webp',kind:'photo'},
  ttcPranayama:{src:'media/ttc-pranayama.jpg',kind:'photo'},
  ttcTarot:{src:'media/ttc-tarot.jpg',kind:'photo'},
  ttcHealing:{src:'media/ttc-healing.jpg',kind:'photo'},
  dropinKriya:{src:'media/dropin-kriya.jpg',kind:'photo'},
  dropinNumerology:{src:'media/dropin-numerology.jpg',kind:'photo'},
  dropinBreathwork:{src:'media/dropin-breathwork.jpg',kind:'photo'},
  dropinYoga:{src:'media/dropin-yoga.jpg',kind:'photo'},
  onlineKriya:{src:'media/online-kriya.jpg',kind:'photo'},
  onlineBeginner:{src:'media/online-beginner.jpg',kind:'photo'},
  onlineIntermediate:{src:'media/online-intermediate.jpg',kind:'photo'},
  onlineBreathwork:{src:'media/online-breathwork.jpg',kind:'photo'},
  onlineTarot:{src:'media/online-tarot.webp',kind:'photo'},
  onlineNumerology:{src:'media/online-numerology.jpg',kind:'photo'},
  retreatMain:{src:'media/retreat-main.jpg',kind:'photo'},
  retreatHimalaya:{src:'media/retreat-himalaya.jpg',kind:'photo'},
  rooms1:{src:'media/rooms-1.jpg',kind:'photo'},
  rooms2:{src:'media/rooms-3b.jpg',kind:'photo'},
  rooms3:{src:'media/rooms-2b.jpg',kind:'photo'},
  g0:{src:'media/gallery-1.jpg',kind:'photo'},
  g1:{src:'media/gallery-2.jpg',kind:'photo'},
  g2:{src:'media/gallery-3.jpg',kind:'photo'},
  g3:{src:'media/gallery-4.jpg',kind:'photo'},
  g4:{src:'media/gallery-5.webp',kind:'photo'},
  g5:{src:'media/gallery-6.jpg',kind:'photo'},
  g6:{src:'media/gallery-7.jpg',kind:'photo'},
  g7:{src:'media/gallery-8.jpg',kind:'photo'},
  v0:{src:'',kind:'photo',spec:'300 × 300'},v1:{src:'',kind:'photo',spec:'300 × 300'},v2:{src:'',kind:'photo',spec:'300 × 300'},
  vol0:{src:'media/vol-bruno.jpg',kind:'photo'},vol1:{src:'media/vol-ashish.jpg',kind:'photo'},vol2:{src:'media/vol-juliana.jpg',kind:'photo'},
  taoFlow:{src:'',kind:'photo',spec:'900 × 700',note:'Tao Flow Awakening — photo coming soon'},
  massage:{src:'',kind:'photo',spec:'900 × 700',note:'Massage therapies — photo coming soon'},
  kundaliniMassage:{src:'',kind:'photo',spec:'900 × 700',note:'Kundalini Massage — photo coming soon'},
  deepTissueMassage:{src:'',kind:'photo',spec:'900 × 700',note:'Deep Tissue Massage — photo coming soon'},
  hotStoneMassage:{src:'',kind:'photo',spec:'900 × 700',note:'Hot Himalayan Salt Stones Massage — photo coming soon'},
  trameTherapy:{src:'',kind:'photo',spec:'900 × 700',note:'Trame Therapy — photo coming soon'},
  transform13D:{src:'',kind:'photo',spec:'900 × 700',note:'13D Multi-Dimensional Transformation — photo coming soon'},
  shiatsu:{src:'',kind:'photo',spec:'900 × 700',note:'Shiatsu — photo coming soon'},
  crystalTherapy:{src:'',kind:'photo',spec:'900 × 700',note:'Crystal Therapy — photo coming soon'},
  soundHealing:{src:'',kind:'photo',spec:'900 × 700',note:'Energetic Sound Healing — photo coming soon'},
  ekamRituals:{src:'',kind:'photo',spec:'900 × 700',note:'Ekam Journey Healing Rituals — photo coming soon'},
  pinealSound:{src:'',kind:'photo',spec:'900 × 700',note:'Pineal Gland Activation by Sounds — photo coming soon'}
};

/* ───── teacher training certificate ───── */
var PILLARS=[
 {n:'Ekam Kriya Meditation',deva:'ध्यान',m:'ttcKriya',v:'lZYe0ZULLH8',
  d:'Kriya is inner alchemy. This training opens the path to self-mastery through ancient Himalayan techniques designed to purify energy, expand consciousness, and reveal the quiet power within.',
  w:[['Format','In-person, Rishikesh'],['Focus','Self-mastery & presence']],
  g:'<circle cx="60" cy="60" r="56" fill="#E8E1CE" stroke="#8E3323"/>'
   +'<g class="sway"><circle cx="60" cy="34" r="10" fill="#E8B537" stroke="#8E3323"/>'
   +'<path d="M60 44 v22M60 54 L38 46M60 54 l22-8" stroke="#8E3323"/>'
   +'<path d="M60 66 q-24 4-30 26 q30 12 60 0 q-6-22-30-26z"/></g>'},

 {n:'Breathwork',deva:'श्वास',m:'ttcBreathwork',
  d:'Our Breathwork TTC weaves Himalayan wisdom with modern technique to help you access healing, clarity and inner strength — and guide others through conscious, heart-centered breath.',
  w:[['Duration','6 days · 30 hours'],['Focus','Conscious, heart-centered breath']],
  g:'<circle cx="60" cy="60" r="56" fill="#E8E1CE" stroke="#8E3323"/>'
   +'<g class="sway"><circle cx="60" cy="60" r="13" fill="#CF9412" stroke="#8E3323"/>'
   +'<circle cx="60" cy="60" r="26"/><circle cx="60" cy="60" r="38" opacity=".6" stroke-dasharray="3 6"/>'
   +'<path d="M60 12 v10M60 98 v10M12 60 h10M98 60 h10" stroke="#8E3323"/></g>'},

 {n:'Pranayama',deva:'प्राणायाम',m:'ttcPranayama',
  d:'Rooted in ancient yogic lineages, this Pranayama TTC invites you to explore the depth of your inner energy through traditional technique and mindful practice.',
  w:[['Duration','6 days · 12 hours'],['Focus','Subtle awareness & confidence']],
  g:'<circle cx="60" cy="60" r="56" fill="#E8E1CE" stroke="#8E3323"/>'
   +'<g class="sway"><path d="M20 60 q10-18 20 0 t20 0 t20 0 t20 0" stroke="#8E3323"/>'
   +'<circle cx="60" cy="60" r="8" fill="#CF9412" stroke="#8E3323"/></g>'},

 {n:'Tarot Reading',deva:'टैरो',m:'ttcTarot',
  d:'A space for clarity and truth. Through intuitive tarot guidance, you will connect with the messages your soul is ready to receive, illuminating your path with insight and gentle wisdom.',
  w:[['Format','In-person, Rishikesh'],['Focus','Intuitive guidance']],
  g:'<circle cx="60" cy="60" r="56" fill="#E8E1CE" stroke="#8E3323"/>'
   +'<g class="sway"><rect x="40" y="34" width="40" height="56" rx="4" fill="none" stroke="#8E3323"/>'
   +'<path d="M60 50 L72 72 H48z" fill="#CF9412" stroke="#8E3323"/>'
   +'<circle cx="60" cy="44" r="4" fill="#E8B537" stroke="#8E3323"/></g>'},

 {n:'Healing Therapy',deva:'चिकित्सा',m:'ttcHealing',
  d:'A return to balance. Our healing therapies combine ancient traditions with intuitive touch to release tension, restore vitality, and harmonize body, mind and spirit.',
  w:[['Format','In-person, Rishikesh'],['Focus','Body, mind & spirit']],
  g:'<circle cx="60" cy="60" r="56" fill="#E8E1CE" stroke="#8E3323"/>'
   +'<g class="sway"><path d="M36 86 q-8-26 4-40 q6-9 14-9M84 86 q8-26-4-40 q-6-9-14-9" stroke="#8E3323"/>'
   +'<ellipse cx="60" cy="48" rx="19" ry="10" fill="#CF9412" stroke="#8E3323"/>'
   +'<path d="M60 38 q-9-13 0-21 q9 8 0 21z" fill="#E8B537" stroke="#8E3323"/>'
   +'<path d="M40 88 q20 8 40 0" stroke="#5F7A4C"/></g>'}
];

/* ───── holistic healing sanctuary ───── */
var G_MASSAGE='<circle cx="60" cy="60" r="56" fill="#E8E1CE" stroke="#8E3323"/>'
 +'<g class="sway"><path d="M36 86 q-8-26 4-40 q6-9 14-9M84 86 q8-26-4-40 q-6-9-14-9" stroke="#8E3323"/>'
 +'<ellipse cx="60" cy="48" rx="19" ry="10" fill="#CF9412" stroke="#8E3323"/></g>';
var G_LOTUS='<circle cx="60" cy="60" r="56" fill="#E8E1CE" stroke="#8E3323"/>'
 +'<g class="sway"><path d="M60 24 q-24 12-24 36 q0 24 24 12 q24 12 24-12 q0-24-24-36z" stroke="#8E3323"/>'
 +'<circle cx="52" cy="52" r="4" fill="#8E3323" stroke="none"/><circle cx="68" cy="68" r="4" fill="#E8E1CE" stroke="#8E3323"/></g>';
var G_STONES='<circle cx="60" cy="60" r="56" fill="#E8E1CE" stroke="#8E3323"/>'
 +'<g class="sway"><ellipse cx="60" cy="78" rx="26" ry="9" fill="#CF9412" stroke="#8E3323"/>'
 +'<ellipse cx="60" cy="62" rx="19" ry="7" fill="#E8B537" stroke="#8E3323"/>'
 +'<ellipse cx="60" cy="49" rx="12" ry="5" fill="#E8E1CE" stroke="#8E3323"/></g>';
var G_FLAME='<circle cx="60" cy="60" r="56" fill="#E8E1CE" stroke="#8E3323"/>'
 +'<g class="sway"><path d="M60 26 q18 20 10 36 q-4 8-12 8 q-8 0-12-8 q-6-14 6-30 q2 8 8 -6z" fill="#CF9412" stroke="#8E3323"/></g>';
var G_RAYS='<circle cx="60" cy="60" r="56" fill="#E8E1CE" stroke="#8E3323"/>'
 +'<g class="sway"><circle cx="60" cy="60" r="12" fill="#E8B537" stroke="#8E3323"/>'
 +'<path d="M60 30v14M60 76v14M30 60h14M76 60h14M39 39l10 10M81 39l-10 10M39 81l10-10M81 81l-10-10" stroke="#8E3323"/></g>';
var G_SHIATSU='<circle cx="60" cy="60" r="56" fill="#E8E1CE" stroke="#8E3323"/>'
 +'<g class="sway"><circle cx="60" cy="40" r="9" fill="#E8B537" stroke="#8E3323"/>'
 +'<path d="M60 49 v34M46 66 h28M46 94 l14-11 14 11" stroke="#8E3323"/>'
 +'<circle cx="60" cy="60" r="3" fill="#8E3323" stroke="none"/><circle cx="60" cy="76" r="3" fill="#8E3323" stroke="none"/></g>';
var G_CRYSTAL='<circle cx="60" cy="60" r="56" fill="#E8E1CE" stroke="#8E3323"/>'
 +'<g class="sway"><path d="M60 28 L84 52 L72 92 H48 L36 52 Z" fill="#E8B537" stroke="#8E3323"/>'
 +'<path d="M36 52 H84M60 28 V92" stroke="#8E3323" opacity=".6"/></g>';
var G_SOUND='<circle cx="60" cy="60" r="56" fill="#E8E1CE" stroke="#8E3323"/>'
 +'<g class="sway"><path d="M60 40 v40M48 48 v24M36 54 v12M72 48 v24M84 54 v12" stroke="#CF9412" stroke-width="4"/></g>';
var G_TAROT='<circle cx="60" cy="60" r="56" fill="#E8E1CE" stroke="#8E3323"/>'
 +'<g class="sway"><rect x="40" y="34" width="40" height="56" rx="4" fill="none" stroke="#8E3323"/>'
 +'<path d="M60 50 L72 72 H48z" fill="#CF9412" stroke="#8E3323"/>'
 +'<circle cx="60" cy="44" r="4" fill="#E8B537" stroke="#8E3323"/></g>';
var G_EYE='<circle cx="60" cy="60" r="56" fill="#E8E1CE" stroke="#8E3323"/>'
 +'<g class="sway"><path d="M22 60 Q60 30 98 60 Q60 90 22 60Z" fill="none" stroke="#8E3323"/>'
 +'<circle cx="60" cy="60" r="12" fill="#CF9412" stroke="#8E3323"/><circle cx="60" cy="60" r="4" fill="#8E3323" stroke="none"/></g>';

/* training courses — become a practitioner */
var HOLISTIC_TRAINING=[
 {n:'Kundalini Massage',deva:'',m:'kundaliniMassage',g:G_MASSAGE,
  d:'Learn and practice this ancient Ayurvedic care — a unique way to give a massage, working with sesame oil, ghee, essential oils and bija mantras.',
  w:[['Duration','10 hours'],['Format','In-person, Rishikesh']]},
 {n:'Deep Tissue Massage',deva:'',m:'deepTissueMassage',g:G_STONES,
  d:'Become an expert in this famous Ayurvedic massage — full body care.',
  w:[['Duration','30 hours'],['Format','In-person, Rishikesh']]},
 {n:'Tarot Card Reading',deva:'टैरो',m:'ttcTarot',g:G_TAROT,
  d:'Learn and awaken your consciousness about archetypes, enhance your intuitive power, and connect and develop new skills.',
  w:[['Duration','6 hours'],['Format','In-person, Rishikesh']]}
];

/* packages — relax & rejuvenate */
var HOLISTIC_PACKAGES=[
 {n:'Tao Flow Awakening',deva:'',m:'taoFlow',g:G_LOTUS,
  d:'Uplift your vibration, free yourself and radiate love. Discover your true self and spread your new wings — each day, select and receive a therapy of your choice for a super holistic experience.',
  w:[['Format','7 encounters × 90 min'],['Where','In-person, Rishikesh']]},
 {n:'Ekam Journey Healing Rituals',deva:'',m:'ekamRituals',g:G_MASSAGE,
  d:'Pamper yourself with this Ekam Special — a combination of two treatments designed to bring you maximum relaxation and rejuvenation: Kundalini Massage + Shiatsu, or Deep Tissue Massage + Shiatsu.',
  w:[['Duration','3 hours'],['Format','In-person, Rishikesh']]}
];

/* à la carte healing sessions — all 90 min · ₹3,000 */
var HOLISTIC_ALACARTE=[
 {n:'Kundalini Massage',deva:'',m:'kundaliniMassage',g:G_MASSAGE,
  d:'Deep chakra cleansing to feel and vibrate your own essence — stimulate your kundalini.',
  w:[['Duration','90 min'],['Price','₹3,000']]},
 {n:'Deep Tissue Massage',deva:'',m:'deepTissueMassage',g:G_STONES,
  d:'Ayurvedic massage with oil to remove energetic nodules and tensions — stimulation of fascias and muscles with light and deep pressures.',
  w:[['Duration','90 min'],['Price','₹3,000']]},
 {n:'Hot Himalayan Salt Stones Massage',deva:'',m:'hotStoneMassage',g:G_STONES,
  d:'Experience the rejuvenating power of Himalayan salt stones — rich in minerals, heated to release their therapeutic benefits into your skin and muscles. Deep tranquility and revitalization.',
  w:[['Duration','90 min'],['Price','₹3,000']]},
 {n:'Trame Therapy',deva:'',m:'trameTherapy',g:G_FLAME,
  d:'An alchemist treatment to liberate emotions and blockages — a powerful healing therapy to help you move on in your life.',
  w:[['Duration','90 min'],['Price','₹3,000']]},
 {n:'13D Multi-Dimensional Transformation',deva:'',m:'transform13D',g:G_RAYS,
  d:'Energetic healing initiated by Ascended Master Germain — it heals and restores your body, mind and soul through an abundance of holistic and universal energies across all your dimensions.',
  w:[['Duration','90 min'],['Price','₹3,000']]},
 {n:'Shiatsu',deva:'',m:'shiatsu',g:G_SHIATSU,
  d:'A Japanese treatment to boost the immune system and rejuvenate and regenerate yourself — the practitioner works your meridian points using acupressure all over the body.',
  w:[['Duration','90 min'],['Price','₹3,000']]},
 {n:'Crystal Therapy',deva:'',m:'crystalTherapy',g:G_CRYSTAL,
  d:'Enjoy a special treatment done by the crystals themselves as you lie within a crystal mandala — a deep feeling of alignment, inner balance and joy.',
  w:[['Duration','90 min'],['Price','₹3,000']]},
 {n:'Energetic Sound Healing',deva:'',m:'soundHealing',g:G_SOUND,
  d:'Enhance your vocal clarity and confidence. Boost your energy, activate your kundalini, and practice voice-opening exercises — vowel modulation, Hebraic mantra singing, and grounding.',
  w:[['Duration','90 min'],['Price','₹3,000']]}
];

var VALUES=[
 ['1','Holistic Healing','Integrating breathwork, meditation, life guidance and energy practices & bodywork to restore balance and well-being.'],
 ['2','Community & Connection','Creating a conscious space where seekers support and uplift one another in their journey.'],
 ['3','Self-Discovery & Evolution','Empowering individuals to awaken their highest potential and live with awareness.']
];

var DROPIN=[
 {p:'Meditation',t:'Ekam Kriya Meditation',d:'A complete system for inner transformation — working on the physical, energetic, mental and spiritual layers of your being.',dur:'Wed & Sun · 5:30–8:00pm',fee:'Donation based',m:'dropinKriya',v:'lZYe0ZULLH8'},
 {p:'Guidance',t:'Soul Numerology',d:'Decode personality traits, life path direction, karmic challenges and soul contracts through the mystical science of numbers.',dur:'Daily · by availability',fee:'₹3,000 / ₹4,500',m:'dropinNumerology',v:'NubBTk6VqnY'},
 {p:'Breathwork',t:'Breathwork',d:'A comprehensive training in 10+ breathing techniques, from beginner-friendly practices to advanced energy-clearing methods.',dur:'Wed & Sun · 5:30–8:00pm',fee:'₹1,200',m:'dropinBreathwork'},
 {p:'Movement',t:'Yoga',d:'Move, breathe and connect at your own pace — mindful movement and gentle guidance, with no long-term commitment.',dur:'Daily · by availability',fee:'₹500',m:'dropinYoga'}
];

var ONLINE=[
 {p:'Meditation',t:'Ekam Kriya Meditation',d:'A sacred inward journey to awaken higher states of consciousness and harmonize mind, body and soul — rooted in ancient yogic tradition.',dur:'Live online',fee:'Join Ekam',m:'onlineKriya',v:'lZYe0ZULLH8'},
 {p:'Meditation Course',t:'Beginner Meditation (Level 1)',d:'An 8-day course to take a moment off your hectic schedule and connect to your inner self — the perfect start to a meditation journey.',dur:'8 days',fee:'Join Ekam',m:'onlineBeginner'},
 {p:'Meditation Course',t:'Intermediate & Advance',d:'Deepen an existing meditation practice with guided technique for grounding, renewal and inner peace.',dur:'Live online',fee:'Join Ekam',m:'onlineIntermediate'},
 {p:'Breathwork',t:'Breathwork',d:'Guided sessions exploring breathing methods that activate the nervous system, improve oxygen flow and support emotional clarity.',dur:'Live online',fee:'Join Ekam',m:'onlineBreathwork'},
 {p:'Guidance',t:'Tarot Card',d:'A reflective, empowering process of self-understanding — personalised insight into relationships, career, purpose and growth.',dur:'By appointment',fee:'Join Ekam',m:'onlineTarot'},
 {p:'Guidance',t:'Soul Numerology',d:'Personalised insight into your soul number, personality number and life path — a roadmap for conscious, aligned decisions.',dur:'By appointment',fee:'Join Ekam',m:'onlineNumerology',v:'NubBTk6VqnY'}
];

var RETREATS=[
 {t:'Spiritual Retreat — 7 Days',flag:'Most joined',d:'A sacred journey of self-discovery, healing and inner awakening — yoga, breathwork, Ekam Kriya meditation, tarot and soul numerology, woven into one week by the Dhauli Ganga.',tags:['7 days','all levels','riverside stay'],fee:'Join Ekam',sub:'contact for pricing',m:'retreatMain'},
 {t:'Himalayan Excursions',flag:'Spiritual tour',d:'Gentle trekking, local cultural immersion and spiritual practice in the lap of the Himalayas — sunrise over snow-kissed peaks, sacred rivers, hidden monasteries.',tags:['day & multi-day','any level','guided'],fee:'Join Ekam',sub:'contact for pricing',m:'retreatHimalaya'}
];

var TEACHERS=[
 {n:'Arjun Ji',r:'Founder · Meditation & Breathwork',b:'Founded Ekam Journey to guide each soul on the path of self-discovery and inner awakening — sharing ancient wisdom, breathwork and meditation to help you heal, transform and awaken.',m:'founderArjun'},
 {n:'Franck Ji',r:'Co-Founder · Spiritual Guide',b:'Over 30 years guiding souls through self-discovery, emotional healing and inner freedom across more than 40 countries — drawn back to India, and to Ekam Journey, by a deep karmic call.',m:'founderFranck'}
];

var VOICES=[
 ['It’s been a really beautiful journey in the Ekam program. I had a wonderful experience, and I completed a 6-day Pranayama course. It was truly amazing.','Sharif Pinjari','Google review','v0'],
 ['I had an amazing experience here! I fully recommend to anyone interested in doing Breathwork or curious about it.','Luanna Bittencourt','Google review','v1'],
 ['Amazing experience — did Ekam Kriya meditation and breathwork multiple times, got inner clarity, and the tarot card reading was fantastic. I was able to know about myself through soul numerology.','Lokendra Panwar','Google review','v2']
];

var VOLOFFER=[
 ['1','Free accommodation','Stay with us for the duration of your volunteering, riverside.'],
 ['2','Satvik meals & sessions','Nutritious meals plus access to yoga, meditation and breathwork.'],
 ['3','Real skills','Social media, content, design, digital marketing or property management — put your skills to work for a cause.']
];

var VOLVOICES=[
 ['Volunteering at Ekam Journey was an inspiring and heartwarming experience. I loved spending time in the garden planting and nurturing the land, cooking wholesome meals, and sharing our story through marketing and communication.','Bruno','Volunteer','vol0'],
 ['My experience was both creative and deeply rewarding. I contributed by editing videos, updating the website, and managing our YouTube and Instagram content to share the beauty of this place with the world.','Ashish','Volunteer','vol1'],
 ['A beautiful blend of creativity, learning and community — painting and design work, assisting in yoga classes and retreat activities, and a deep sense of connection and fulfillment.','Juliana','Volunteer','vol2']
];

var GAL=[['g0',210,270],['g1',330,230],['g2',210,210],['g3',200,280],['g4',330,235],['g5',320,220],['g6',210,210],['g7',200,275]];

/* running gallery on the home page — same photographs, a few carrying a caption */
var GAL_HOME=[
 {m:'g0',cap:'River clean-up on World Environment Day'},
 {m:'g1',cap:'Visiting the children of a nearby village'},
 {m:'g2'},
 {m:'g3',cap:'Feeding the local cows, seva after breakfast'},
 {m:'g4',cap:'An evening of kirtan and live music'},
 {m:'g5'},
 {m:'g6'},
 {m:'g7',cap:'A havan under the stars'}
];

/* social activities — community life around Ekam Journey */
var SOCIAL=[
 {t:'River Clean-Up Day',m:'g0',d:"Plogging along the banks of the Dhauli Ganga on World Environment Day — a reminder that caring for the earth is part of the practice too."},
 {t:'Visiting the Local Village',m:'g1',d:'Time with the children of a nearby village — sharing art supplies, laughter and an afternoon together.'},
 {t:'Hands in the Soil',m:'g2',d:'Volunteers planting saplings in the garden — small acts that keep the land, and the community, growing.'},
 {t:'Caring for the Cows',m:'g3',d:"Feeding the local cows with the day's vegetable scraps — a small, daily act of seva."},
 {t:'An Evening of Kirtan',m:'g4',d:'Live music and call-and-response chanting as the sun goes down — one of our favourite ways to gather.'},
 {t:'Welcoming a Retreat',m:'g5',d:'Teachers from India and beyond opening a retreat together, with flowers, prayer and shared intention.'},
 {t:'Circle Meditation',m:'g6',d:'Sitting together, outdoors, in silence — one of the simplest and most powerful things we do as a community.'},
 {t:'Fire Ceremony',m:'g7',d:'A havan under the stars — an ancient ritual that still gathers us, exactly as it always has.'}
];

/* home overview tiles — one per thing Ekam Journey does, linking out to its page */
var HOMETILES=[
 {tag:'Programs',t:'Teacher Training Certificate',d:'Five trainings rooted in Himalayan lineage — become a teacher, not just a practitioner.',m:'ttcKriya',href:'teacher-training.html',featured:true},
 {tag:'Programs',t:'Drop-In Classes',d:'No commitment — join a session whenever your schedule allows.',m:'dropinBreathwork',href:'drop-in.html'},
 {tag:'Programs',t:'Online Sessions',d:'Meditation, breathwork and guidance you can join from anywhere.',m:'onlineKriya',href:'online.html'},
 {tag:'Practice',t:'Himalayan Breath',d:'Traditional pranayama and breathwork, rooted in the wisdom of the mountains.',m:'ttcPranayama',href:'himalayan-breath.html'},
 {tag:'New',t:'Holistic Healing Sanctuary',d:'Tao Flow Awakening, training courses and a full menu of massage and energy therapies.',m:'ttcHealing',href:'holistic-healing.html'},
 {tag:'Guidance',t:'Tarot & Numerology',d:'Structured, honest readings — a vocabulary for what you already sense.',m:'ttcTarot',href:'guidance.html'},
 {tag:'Journey',t:'Spiritual Retreat',d:'A sacred week by the Dhauli Ganga, or a walk into the Himalayas.',m:'retreatMain',href:'retreat.html'},
 {tag:'Stay',t:'Stays in Nature',d:'Riverside rooms, satvik food, and the sound of the Dhauli Ganga outside your window.',m:'rooms1',href:'stays-in-nature.html'}
];

/* ───── placeholder art ───── */
var GLYPH={
 photo:'<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true">'
  +'<circle cx="50" cy="50" r="34"/><circle cx="50" cy="50" r="15"/>'
  +'<g opacity=".8"><path d="M50 16 v12M50 72 v12M16 50 h12M72 50 h12"/>'
  +'<path d="M26 26 l8 8M74 26 l-8 8M26 74 l8-8M74 74 l-8-8" opacity=".6"/></g>'
  +'<path d="M43 44 q7-9 14 0 q-7 9-14 0z" fill="currentColor" stroke="none" opacity=".55"/></svg>',
 video:'<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true">'
  +'<circle cx="50" cy="50" r="34"/><circle cx="50" cy="50" r="44" opacity=".45" stroke-dasharray="4 8"/>'
  +'<path d="M43 38 l20 12-20 12z" fill="currentColor" stroke="none" opacity=".7"/></svg>'
};
function slotFill(el){
  var key=el.dataset.media, m=MEDIA[key];
  if(!m){el.innerHTML='';return;}
  if(m.src){
    el.classList.add('has');
    el.innerHTML=/\.(mp4|webm|mov)(\?|$)/i.test(m.src)
      ?'<video src="'+m.src+'" autoplay muted loop playsinline></video>'
      :'<img src="'+m.src+'" alt="'+(m.alt||'')+'" loading="lazy" decoding="async" onload="this.classList.add(\'loaded\')">';
    return;
  }
  el.classList.remove('has');
  if(el.dataset.glyphFilled)return;
  el.innerHTML='<span class="frame"></span><span class="corner c1"></span><span class="corner c2"></span>'
   +'<span class="corner c3"></span><span class="corner c4"></span>'
   +'<span class="mark">'+GLYPH[m.kind]
   +'<span class="kind">'+m.kind+' · '+key+'</span>'
   +'<span class="spec">'+m.spec+(m.note?'<br>'+m.note:'')+'</span></span>';
}

function $(id){return document.getElementById(id);}
var WA_NUMBER='918630400638';
function waLink(msg){return 'https://wa.me/'+WA_NUMBER+'?text='+encodeURIComponent(msg);}
function applyBtn(name){
  return '<a href="'+waLink("Hi, I'd like to apply for "+name+'.')+'" target="_blank" rel="noopener" class="btn sm">Apply on WhatsApp</a>';
}
function joinBtn(name){
  return '<a href="'+waLink("Hi, I'd like to join "+name+'.')+'" target="_blank" rel="noopener" class="btn sm">Join on WhatsApp</a>';
}
function watchLink(id){
  return id?'<button class="tl watch" data-open-film="'+id+'">▶ Watch video</button>':'';
}
function glyphSvg(g){
  return '<svg viewBox="0 0 120 120" fill="none" stroke="#233A5B" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">'+g+'</svg>';
}
function pillarCard(p){
  var hasPhoto=!!(MEDIA[p.m]&&MEDIA[p.m].src);
  var slotInner=hasPhoto?'':'<div class="plate big">'+glyphSvg(p.g)+'</div>';
  var slotAttrs='data-media="'+p.m+'"'+(hasPhoto?'':' data-glyph-filled="1"');
  var smallPlate=hasPhoto?'<div class="plate">'+glyphSvg(p.g)+'</div>':'';
  return '<article class="path"><div class="slot" '+slotAttrs+'>'+slotInner+'</div>'
   +smallPlate
   +'<div class="body">'+(p.deva?'<span class="deva">'+p.deva+'</span>':'')+'<h3>'+p.n+'</h3><p>'+p.d+'</p>'
   +'<ul>'+p.w.map(function(w){return '<li><span>'+w[0]+'</span><em>'+w[1]+'</em></li>';}).join('')
   +'</ul><div class="cta-row">'+applyBtn(p.n)+watchLink(p.v)+'</div></div></article>';
}
function courseCard(c){
  return '<article class="course"><div class="slot" data-media="'+c.m+'"></div><div class="body">'
   +'<span class="strand">'+c.p+'</span><h3>'+c.t+'</h3><p>'+c.d+'</p>'
   +'<div class="cta-row">'+joinBtn(c.t)+watchLink(c.v)+'</div>'
   +'<div class="foot"><b>'+c.fee+'</b><span>'+c.dur+'</span></div></div></article>';
}

/* ───── build (every render is null-guarded — a page only gets what it has a container for) ───── */
document.body.classList.toggle('tone',!!TONE);

if($('values')) $('values').innerHTML=VALUES.map(function(v){
  return '<div class="value"><span class="num">'+v[0]+'</span><h3>'+v[1]+'</h3><p>'+v[2]+'</p></div>';
}).join('');

if($('paths-grid')) $('paths-grid').innerHTML=PILLARS.map(pillarCard).join('');
if($('holistic-training-grid')) $('holistic-training-grid').innerHTML=HOLISTIC_TRAINING.map(pillarCard).join('');
if($('holistic-packages-grid')) $('holistic-packages-grid').innerHTML=HOLISTIC_PACKAGES.map(pillarCard).join('');
if($('holistic-alacarte-grid')) $('holistic-alacarte-grid').innerHTML=HOLISTIC_ALACARTE.map(pillarCard).join('');
if($('dropin-grid')) $('dropin-grid').innerHTML=DROPIN.map(courseCard).join('');
if($('online-grid')) $('online-grid').innerHTML=ONLINE.map(courseCard).join('');

if($('home-grid')) $('home-grid').innerHTML=HOMETILES.map(function(t){
  return '<a class="otile'+(t.featured?' featured':'')+'" href="'+t.href+'"><div class="inner">'
   +'<div class="slot" data-media="'+t.m+'"></div>'
   +'<div class="body"><span class="tag">'+t.tag+'</span><h3>'+t.t+'</h3><p>'+t.d+'</p>'
   +'<span class="tl">Learn more →</span></div></div></a>';
}).join('');

/* tiles fade+rise into view, staggered, as each grid scrolls into range */
(function(){
  document.querySelectorAll('.paths,.courses').forEach(function(grid){
    [].slice.call(grid.children).forEach(function(el,i){
      el.style.transitionDelay=(i%3*0.09).toFixed(2)+'s';
    });
  });
  var io=new IntersectionObserver(function(entries){
    entries.forEach(function(en){
      if(en.isIntersecting){en.target.classList.add('in');io.unobserve(en.target);}
    });
  },{threshold:.15,rootMargin:'0px 0px -60px 0px'});
  document.querySelectorAll('.path,.course').forEach(function(el){io.observe(el);});
})();

if($('volunteer-offer')) $('volunteer-offer').innerHTML=VOLOFFER.map(function(v){
  return '<div class="value"><span class="num">'+v[0]+'</span><h3>'+v[1]+'</h3><p>'+v[2]+'</p></div>';
}).join('');

if($('volunteer-voices')) $('volunteer-voices').innerHTML=VOLVOICES.map(function(v){
  return '<figure class="voice"><q>'+v[0]+'</q><figcaption class="who">'
   +'<div class="slot dark-bed" data-media="'+v[3]+'"></div>'
   +'<div><b>'+v[1]+'</b><span>'+v[2]+'</span></div></figcaption></figure>';
}).join('');

if($('retreats-rows')) $('retreats-rows').innerHTML=RETREATS.map(function(r,i){
  return '<article class="row'+(i%2?' rev':'')+'"><div class="slot dark-bed arch" data-media="'+r.m+'"></div>'
   +'<div>'+(r.flag?'<span class="flag">'+r.flag+'</span>':'')+'<h3>'+r.t+'</h3><p>'+r.d+'</p>'
   +'<div class="tags">'+r.tags.map(function(t){return '<span>'+t+'</span>';}).join('')+'</div>'
   +'<a href="'+waLink("Hi, I'd like to join the "+r.t+'.')+'" target="_blank" rel="noopener" class="btn lite">'+r.fee+'</a><span class="note">'+r.sub+'</span></div></article>';
}).join('');

if($('teachers-grid')) $('teachers-grid').innerHTML=TEACHERS.map(function(t){
  return '<article class="tcard"><div class="slot" data-media="'+t.m+'"></div>'
   +'<h3>'+t.n+'</h3><p class="role">'+t.r+'</p><p>'+t.b+'</p></article>';
}).join('');

if($('social-grid')) $('social-grid').innerHTML=SOCIAL.map(function(s){
  return '<article class="scard"><div class="slot" data-media="'+s.m+'"></div>'
   +'<div class="body"><h3>'+s.t+'</h3><p>'+s.d+'</p></div></article>';
}).join('');

if($('strip')) $('strip').innerHTML=GAL.map(function(g){
  return '<div class="slot'+(g[1]<g[2]?' arch':'')+'" data-media="'+g[0]
   +'" style="width:'+g[1]+'px;height:'+g[2]+'px"></div>';
}).join('');

/* running (auto-scrolling) gallery — home page only */
if($('home-strip')){
  var runTiles=GAL_HOME.map(function(g){
    return '<div class="rtile"><div class="slot" data-media="'+g.m+'"></div>'
     +(g.cap?'<span class="rcap">'+g.cap+'</span>':'')+'</div>';
  }).join('');
  $('home-strip').innerHTML=runTiles+runTiles;
}

if($('voices-grid')) $('voices-grid').innerHTML=VOICES.map(function(v){
  return '<figure class="voice"><q>'+v[0]+'</q><figcaption class="who">'
   +'<div class="slot dark-bed" data-media="'+v[3]+'"></div>'
   +'<div><b>'+v[1]+'</b><span>'+v[2]+'</span></div></figcaption></figure>';
}).join('');

/* tarot cards + numerology grid, in English numerals — guidance page */
if($('cards')||$('numgrid')){
  var faces=[
    '<path d="M50 14 v72M28 34 h44M22 62 q28 22 56 0"/><circle cx="50" cy="50" r="9"/>',
    '<circle cx="50" cy="34" r="15"/><path d="M50 49 v34M32 62 h36"/><path d="M28 20 l6 6M72 20 l-6 6"/>',
    '<path d="M24 78 L50 22 76 78z"/><circle cx="50" cy="56" r="8"/><path d="M50 22 v-8"/>'
  ];
  if($('cards'))$('cards').innerHTML=faces.map(function(f){
    return '<div class="card"><span class="edge"></span><svg viewBox="0 0 100 100">'+f+'</svg></div>';
  }).join('');
  if($('numgrid')){
    var out='';
    for(var n=1;n<=9;n++)out+='<span>'+n+'</span>';
    $('numgrid').innerHTML=out;
  }
}

/* lotus petals, rays, mandala — himalayan breath page */
if($('petals')||$('rays')||$('mandala')){
  var p='',r='';
  for(var i=0;i<16;i++)p+='<path transform="rotate('+(i*22.5)+' 200 200)" d="M200 40 q28 34 0 66 q-28-32 0-66z"/>';
  for(var j=0;j<24;j++)r+='<line transform="rotate('+(j*15)+' 200 200)" x1="200" y1="140" x2="200" y2="160" class="warm"/>';
  if($('petals'))$('petals').innerHTML=p;
  if($('rays'))$('rays').innerHTML=r;

  if($('mandala')){
    var m='<circle cx="300" cy="300" r="292"/><circle cx="300" cy="300" r="240"/><circle cx="300" cy="300" r="160"/><circle cx="300" cy="300" r="86"/>';
    for(var k=0;k<32;k++)m+='<path transform="rotate('+(k*11.25)+' 300 300)" d="M300 14 q34 46 0 92 q-34-46 0-92z"/>';
    for(var z=0;z<48;z++)m+='<path transform="rotate('+(z*7.5)+' 300 300)" d="M300 92 v34"/>';
    $('mandala').innerHTML=m;
  }
}

/* hero background slideshow — cycles through the supplied photographs */
(function(){
  var hs=$('heroscene'),kb=$('heroKb');
  if(!hs||!kb)return;
  var imgs=[MEDIA.heroBg1,MEDIA.heroBg2,MEDIA.heroBg3].filter(function(m){return m&&m.src;});
  if(!imgs.length)return;
  hs.classList.add('on');
  kb.innerHTML=imgs.map(function(m,i){
    return '<div class="layer" role="img" aria-label="'+(m.alt||'')+'" '
     +(i===0?'style="background-image:url(\''+m.src+'\')"':'data-bg="'+m.src+'"')+'></div>';
  }).join('');
  setTimeout(function(){
    kb.querySelectorAll('.layer[data-bg]').forEach(function(l){
      l.style.backgroundImage='url(\''+l.dataset.bg+'\')';
      l.removeAttribute('data-bg');
    });
  },1500);
})();

document.querySelectorAll('[data-media]').forEach(slotFill);

/* ═════ THE ONE BREATH — sole timing source ═════ */
var BR={i:4,h:4,o:6},t0=performance.now(),root=document.documentElement;
var mnum=$('mnum'),mword=$('mword'),core=$('core');
function easeInOut(x){return x<.5?2*x*x:1-Math.pow(-2*x+2,2)/2;}
function breath(now){
  var cyc=BR.i+BR.h+BR.o, m=((now-t0)/1000)%cyc, amp, phase, left;
  if(m<BR.i){phase='inhale';amp=m/BR.i;left=BR.i-m;}
  else if(m<BR.i+BR.h){phase='hold';amp=1;left=BR.i+BR.h-m;}
  else{phase='exhale';amp=1-(m-BR.i-BR.h)/BR.o;left=cyc-m;}
  var e=easeInOut(amp);
  root.style.setProperty('--breath',e.toFixed(4));
  root.style.setProperty('--spin',((now-t0)/1000*1.2+e*6).toFixed(2));
  var n=Math.ceil(left);
  if(mnum&&mnum.textContent!=n)mnum.textContent=n;
  if(mword&&mword.textContent!==phase)mword.textContent=phase;
  if(core)core.setAttribute('r',(9+e*17).toFixed(1));
  return e;
}

/* ═════ one scroll engine ═════ */
var LYR=[],YAN,STRIP,REV=[],H=innerHeight,YANNODES=[],HD=$('hd'),lastY=-1;
function measure(){
  H=innerHeight;
  LYR=[].slice.call(document.querySelectorAll('.lyr'));
  YAN=document.querySelector('[data-yantra]');
  STRIP=$('strip');
  REV=[].slice.call(document.querySelectorAll('[data-reveal]')).map(function(el){
    if(!el.dataset.done){
      var tmp=document.createElement('div');tmp.innerHTML=el.innerHTML;var out='';
      [].slice.call(tmp.childNodes).forEach(function(nd){
        if(nd.nodeType===3){out+=nd.nodeValue.split(/\s+/).filter(Boolean)
          .map(function(w){return '<w>'+w+'</w>';}).join(' ')+' ';}
        else{out+=nd.outerHTML+' ';}
      });
      el.innerHTML=out;el.dataset.done='1';
    }
    return {el:el,words:[].slice.call(el.querySelectorAll('w'))};
  });
  YANNODES=YAN?[].slice.call(YAN.querySelectorAll('path,circle,line,polygon')):[];
  YANNODES.forEach(function(s){
    var L=0;try{L=s.getTotalLength?s.getTotalLength():0;}catch(e){}
    if(!L||s.classList.contains('core')||s.classList.contains('aura')){s.dataset.len=0;return;}
    s.dataset.len=L;s.style.strokeDasharray=L;s.style.strokeDashoffset=L;
  });
}
function prog(el){
  var r=el.getBoundingClientRect();
  return Math.min(Math.max((H-r.top)/(H+r.height),0),1);
}
function frame(now){
  var e=breath(now), y=window.scrollY;
  if(y!==lastY){
    lastY=y;
    var docH=document.body.scrollHeight-H;
    root.style.setProperty('--read',(docH>0?Math.min(y/docH,1):0).toFixed(4));
    LYR.forEach(function(l){
      l.style.transform='translate3d(0,'+(y*(parseFloat(l.dataset.depth)||0)).toFixed(1)+'px,0)';
    });
    if(STRIP)STRIP.style.transform='translate3d('
      +(-prog(STRIP.parentNode.parentNode)*Math.max(STRIP.scrollWidth-innerWidth+60,0)).toFixed(1)+'px,0,0)';
    if(YAN&&YANNODES.length){
      var k=Math.min(Math.max((prog(YAN)-.16)/.5,0),1);
      YANNODES.forEach(function(s,i){
        var L=+s.dataset.len;if(!L)return;
        var st=i/YANNODES.length*.45;
        s.style.strokeDashoffset=(L*(1-Math.min(Math.max((k-st)/(1-st||1),0),1))).toFixed(1);
      });
    }
    REV.forEach(function(r){
      var upto=Math.round(Math.min(Math.max((prog(r.el)-.28)/.34,0),1)*r.words.length);
      r.words.forEach(function(w,i){w.classList.toggle('lit',i<upto);});
    });
    if(HD)HD.classList.toggle('set',y>70);
  }
  requestAnimationFrame(frame);
}
measure();
addEventListener('resize',measure);
addEventListener('load',measure);
requestAnimationFrame(frame);

/* ───── chrome ───── */
var menu=$('menu'),tap=$('tap');
if(tap)tap.addEventListener('click',function(){tap.setAttribute('aria-expanded',menu.classList.toggle('open'));});
if(menu)menu.addEventListener('click',function(){menu.classList.remove('open');});
var sheet=$('sheet'),sheetFrame=$('sheetFrame');
var YT_MAIN='6krL6HRxBj0';
function openSheet(id){if(sheetFrame)sheetFrame.src='https://www.youtube.com/embed/'+(id||YT_MAIN)+'?autoplay=1&mute=1&rel=0';if(sheet)sheet.classList.add('open');}
function closeSheet(){if(sheet)sheet.classList.remove('open');if(sheetFrame)sheetFrame.src='';}
document.querySelectorAll('[data-open-film]').forEach(function(b){
  b.addEventListener('click',function(){openSheet(b.dataset.openFilm);});
});
if($('xsheet'))$('xsheet').addEventListener('click',closeSheet);
if(sheet)sheet.addEventListener('click',function(ev){if(ev.target===sheet)closeSheet();});
addEventListener('keydown',function(ev){if(ev.key==='Escape')closeSheet();});

var ytFacade=$('ytFacade');
if(ytFacade)ytFacade.addEventListener('click',function(){
  var ifr=document.createElement('iframe');
  ifr.src='https://www.youtube.com/embed/'+YT_MAIN+'?autoplay=1';
  ifr.title=ytFacade.getAttribute('aria-label');
  ifr.allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
  ifr.allowFullscreen=true;
  ifr.style.cssText='position:absolute;inset:0;width:100%;height:100%;border:0';
  ytFacade.replaceWith(ifr);
});

/* feedback / review — composes the message and sends it straight to WhatsApp */
var feedbackForm=$('feedbackForm');
if(feedbackForm)feedbackForm.addEventListener('submit',function(ev){
  ev.preventDefault();
  var name=($('fbName')&&fbName.value.trim())||'';
  var msg=($('fbMsg')&&fbMsg.value.trim())||'';
  if(!msg)return;
  var text='Feedback from '+(name||'a visitor')+':\n'+msg;
  window.open(waLink(text),'_blank','noopener');
  feedbackForm.reset();
  if($('fbThanks'))$('fbThanks').hidden=false;
});

<template>
    <div class="bg-[#BDC3C7)]  py-16 px-6">
        <div class="max-w-6xl mx-auto text-center">
            <!-- <h2 class="text-4xl font-bold mb-6">Case Studies</h2> -->
            <h2 class="text-5xl font-bold">Case <span class="text-secondary">Studies</span></h2>

            <p class="text-lg text-gray-500 mb-10">
                Real-world success stories showcasing how DevPulse transforms businesses.
            </p>
        </div>

        <!-- Case Studies Grid -->
        <div class="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="caseStudy in caseStudies" :key="caseStudy.title"
                class="bg-white text-primary p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all cursor-pointer"
                @click="openCaseStudy(caseStudy)">
                <h3 class="text-2xl font-semibold mb-3">{{ caseStudy.title }}</h3>
                <p class="text-gray-600 mb-2"><strong>Challenge:</strong> {{ caseStudy.challenge }}</p>
                <p class="text-gray-600 mb-2"><strong>Solution:</strong> {{ caseStudy.solution }}</p>
                <p class="text-gray-600 font-bold">Results: {{ caseStudy.results }}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            caseStudies: [
                { title: "E-Commerce Platform Revamp", challenge: "Client faced slow loading times and poor UX.", solution: "Developed a high-performance web app with React & Node.js.", results: "Improved load speed by 60%, increased sales conversions by 30%." 
                },
                { title: "Mobile Banking App", challenge: "Security vulnerabilities and low user engagement.", solution: "Implemented biometric authentication and redesigned UI.", results: "Enhanced security and increased app usage by 40%." },
                { title: "Smart Home Automation", challenge: "Integration issues with multiple IoT devices.", solution: "Developed a unified IoT platform with real-time monitoring.", results: "Seamless device connectivity and 25% energy savings."      }
            ]
        }
    }
}
</script>
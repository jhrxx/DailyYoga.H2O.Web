(function() {
  'use strict';

  angular
    .module('h2o')
    .service('Exercises', Exercises)
    .controller('ExercisesController', ExercisesController);

  /** @ngInject */
  function Exercises() {
  	var data = [{
			id:1,title: 'Yoga for Weight loss I', name: '初级减脂瑜伽', content: 'Easy-to-learn yoga session with simple poses specially designed for beginners to lose weight.', desc: '简单易练的瑜伽课程。适宜所有级别的瑜伽爱好者，让你最快获得减肥瘦身的效果。'
			},{id:2,title: 'Yoga for Runners', name: '跑步者瑜伽', content: 'Yoga solution for runners to eliminate side-effects like back and chest pain.Pre-Run and Post-Run trainings help you enjoy a better running.', desc: '跑步和瑜伽的完美搭配，让你在一次锻炼中同时兼顾力量与柔韧，更好的感受运动的快感。 跑前热身练习用于增强身体的平衡性，跑后拉伸练习重于修复，感受最棒的跑步体验。'
			},{id:3, title: 'Yoga for Body Toning I', name: '形体瑜伽', content: 'Provides good figure building sessions besides weight loss training. Through an overall training, every part of your body will be covered to burn fats and streamline your body.', desc: '覆盖身体每一个部位，助你在减肥燃脂的同时塑造美好身形。促进新陈代谢、消化和排泄，消除水肿，排净体内毒素。'
			},{id:4, title: 'Sun Salutation', name: '太阳式', content: 'Guides you through the traditional sequence of Sun Salutation with detailed demonstrations of breathing coordinated with posture performing. Formed by a group of asanas that originated from behaviors of honoring the sun.  ', desc: '带领你学习太阳式——这一传统的瑜伽体式串联练习。跟随详尽的语音解说，你将学会如何更好的协调呼吸和动作，达到最佳的瑜伽健身效果。'
			},{id:5, title: 'Yoga for Slim Waist', name: '腰腹速瘦瑜伽', content: 'For yogis who want to fight belly fat and achieve a slim waist. Relatively high intensity, directly targeting your fat.A curved waist is just at your hand!', desc: '搞定烦人肚子肉，打造纤细小蛮腰。核心肌力勤锻炼，消除赘肉，强健腹肌。有效拉伸助纤体，使肌体型更加匀称和舒展。瑜伽扭转助消化，改善腹部血液循环，促进消化和排毒的进程。'
			},{id:6, title: 'Yoga for Slim Legs', name: '腿部速瘦瑜伽', content: 'Sculpting your legs with yoga. Yoga for Slim legs provides abundant postures specifically targeting your leg. A full set of flow yoga sequence designed for quick leg toning.', desc: '有效锻炼双腿的每一个部分，燃烧大腿脂肪。这个夏天，利用瑜伽打造健康美腿吧~'
			},{id:7, title: 'Yoga for a Healthy Neck', name: '肩颈理疗瑜伽', content: 'Postures aiming to free up all of the areas surrounding your neck and shoulders. Quick fix to sedentary lifestyle!', desc: '瑜伽是针对颈椎问题的最有效疗法之一。课程由每日瑜伽资深注册理疗师精心设计，呵护你的颈椎治愈颈部疾病。全面释放肩、颈部位压力。快速见效并可与任何其他瑜伽课程配合练习。'
			},{id:8, title: 'Yoga for Toned Arms', name: '手臂速瘦瑜伽', content: 'Yoga for Toned Arms is the best arm shaper exercise combines dynamic movements along with static holds. Involves flexion and extension of the biceps and triceps and keeps every part of your arms fully engaged.', desc: '手臂速瘦瑜伽不同于传统的手臂锻炼，是以哈他瑜伽为主，辅以力量型训练，达到纤细手臂，减肥塑身的目的。最大限度地提升每次练习的效果。'
			},{id:9, title: 'Prenatal Yoga', name: '孕期瑜伽', content: 'Helps you prepare your mind and body for labor and birth. Yoga is a gentle way of keeping your body active and supple and minimize the common Pregnancy Symptoms like morning sickness and constipation. It can also help in ensuring easier labor and smooth delivery by relieving tension around the cervix and birth canal and by opening the pelvis.', desc: '帮助准妈妈们提高专注性并很好地协助准妈妈们在心理和生理方面为生产做好准备。通过柔和的瑜伽体式以提高身体的灵活性和柔韧性，并使常见的晨呕和便秘等妊娠反应发生的可能性降至最低。孕期瑜伽能够很大程度上帮助准妈妈们应对妊娠期的各种反应症状，从而达到轻松顺产的效果，同时对促进产后恢复也是很有帮助的哦~'
			},{id:10, title: 'Morning Yoga', name: '清晨瑜伽', content: 'Rapidly sobers you up from sleep, clears your mind and helps you focus and relax.Not only summons all the energy you need for work， but also boosts your blood circulation. Morning gives you a much more productive day.', desc: '快速清醒，摆脱睡眠状态。舒展肌肉，使全身充满活力。助于集中精力，放松心态。唤醒体内能量，工作轻松有余力。加快血液循环，优化早晚作息规律'
			},{id:11, title: 'Yoga for Flexibility', name: '提升柔韧度', content: 'Stretches your body and loosens your muscles and refreshes yourself both physically and mentally.Increases blood flow and boosts your immunity system. Yoga stimulates your joints to produce a tissue lubricant that can smooth your moves. Exercising regularly would help you rebuild muscle memory and make your body younger in the long run.', desc: '舒展全身，放松肌肉。缓解疲劳，唤醒你的活力。使体型更加紧致，有助减肥瘦身。快速释放压力，让你看起来更年轻。加快血液循环，增强免疫力。'
			},{id:12, title: 'Yoga for Better Sleep', name: '舒眠瑜伽', content: 'Helps you easily fall asleep at night.Cures insomnia, maximizes your deep, quality sleeping time. Say no to medical sleeping aids and enjoy the most natural way to a better sleep!', desc: '助你夜晚轻松入眠。治疗失眠，延长深度睡眠时间。1小时深度睡眠快速提升3倍。和闹钟说拜拜，每早自然醒来，精力充沛每一天'
			},{id:13, title: 'Office Yoga to De-Stress', name: '办公室瑜伽减压篇', content: '40% of office workers are so stressed that their health is affected. Office Yoga to De-Stress focuses on your daily working stresses and hence, tackles your chronic stress-related symptoms. Don\'t wait until it\'s too late to deal with your stresses objectively.', desc: '办公室里，工作之余，你可以做的还有很多！办公室瑜伽减压篇力图帮您减轻压力，远离亚健康，保持最佳状态。提升工作效率，给你的身心放个假。跟头痛，颈肩腰痛说再见吧！'
			},{id:14, title: 'Office Yoga to Keep Fit', name: '办公室瑜伽塑形篇', content: 'Spend most of the day sitting in front of your desk? Gaining weight without even noticing? Office Yoga to Keep Fit is tailored specifically to office workers, aiming at providing an effective, convenient and all-round indoor solution. Get fitter and fitter in your daily work, dose that sound appealing?', desc: '在最大程度上解决上班一族的头号困扰。该课程瞄准上班族的主要问题（头痛、颈椎病和肥胖），包含了最有效，简单的一系列动作，专门针对身体各个部位，足不出户，只需在自己办公桌范围内即可轻松做瑜伽。'
			},{id:15, title: 'Yoga for Healthy Menstruation', name: '经期调理瑜伽', content: 'Eases menstrual cramps and regulates your menstrual cycle. Accelerates blood flow of the reproductive organs and relieves symptoms of irregular menstruation, late period and amenorrhoea. Compared with medication, yoga is a more natural and healthy way to relieve your menstrual disorder. Let your feminine charm bloom and shine!', desc: '减轻经期疼痛。调理月经周期。加快生殖器官的血液流通。放松神经系统，平衡内分泌。缓解月经不调，月经延迟和闭经等症状。'
			},{id:16, title: 'Yoga for Glowing Skin', name: '美肤瑜伽', content: 'Gives you a naturally glowing skin without any chemicals. Thoroughly oxygenates your whole body and awakens your inactive skin. By boosting your digestive process, quickly detoxifies your body. It balances your inner body functions and tackles the problems from the root. Give it a try! May beauty and health ooze out from inside.', desc: '还你天然靓丽肌肤，由内而外的白皙。通过提升头部供血，促进血液循环，增强肌肤活力。刺激消化器官，帮助排毒，氧化全身，唤醒沉睡肌肤。从根本上持久解决各种肌肤问题。'
		}];

    this.getData = getData;

    function getData() {
      return data;
    }
  }

  /** @ngInject */
  function ExercisesController($scope, $log, Exercises) {
  	$scope.data = Exercises.getData();
  	// $log.log($scope.data);
  }
})();

import {List,Map} from 'immutable';
import {expect} from 'chai';
// 载入需要测试的函数
import {setEntries,next,vote} from '../src/core';

describe('application logic',()=>{
	describe('core:setEntries function test',()=>{
		it('add new entries to states',()=>{
			const states=Map();
			const entries=List.of('Trainspotting','28 Days later');
			const nextState=setEntries(states,entries);
			expect(nextState).to.equal(Map({entries:List.of('Trainspotting','28 Days later')}));
		})
		it('add array to states',()=>{
			const states=Map();
			const entries=['Trainspotting','28 Days later'];
			const nextState=setEntries(states,entries);
			expect(nextState).to.equal(Map({entries:List.of('Trainspotting','28 Days later')}));
		})
	});
	describe('core:next function test',()=>{
		it('next function set pair from states',()=>{
			const states=Map();
			const entries=List.of('Trainspotting','28 Days later','Friends','Atlatis');
			const MoiveStates=setEntries(states,entries);
			const nextMovieState=next(MoiveStates);
			expect(nextMovieState).to.equal(Map({
				vote:Map({pair:List.of('Trainspotting','28 Days later')}),
				entries:List.of('Friends','Atlatis')}));
		})
	});

	describe('core:vote function test',()=>{
		describe('a vote call will add tally for vote results',()=>{
			const states=Map({
				vote:Map({pair:List.of('Trainspotting','28 Days later')}),
				entries:List.of('Friends','Atlatis')});
			expect(vote(states,'Trainspotting')).to.equal(Map({
					vote:Map({pair:List.of('Trainspotting','28 Days later')
						,tally:Map({
						'Trainspotting':1
					})}),
					entries:List.of('Friends','Atlatis')
					}));
		});

		describe('Add tally when vote this item again',()=>{
			const states=Map({
				vote:Map({
						pair:List.of('Trainspotting','28 Days later'),
						tally:Map({
								'Trainspotting':1
						})
					}),
					entries:List.of('Friends','Atlatis'),
					});
			expect(vote(states,'Trainspotting')).to.equal(Map({
					vote:Map({
							pair:List.of('Trainspotting','28 Days later'),
							tally:Map({
							'Trainspotting':2
							})
						}),
					entries:List.of('Friends','Atlatis'),
					}));
		});
	})
});